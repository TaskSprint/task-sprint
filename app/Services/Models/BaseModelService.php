<?php

namespace App\Services\Models;

use App\Facades\FileService;
use App\Models\File;
use App\ValueObjects\LocaleString;
use DB;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use InvalidArgumentException;
use ReflectionClass;
use ReflectionException;
use ReflectionNamedType;
use Throwable;

/**
 * @template TModel of Model
 */
abstract class BaseModelService
{
    /**
     * @var class-string<TModel>
     */
    protected string $class;
    protected array $attributes;
    protected array $authCreationAttributes;
    protected array $authUpdateAttributes;
    protected array $searchAttributes;

    /**
     * @var TModel
     * @noinspection PhpDocFieldTypeMismatchInspection
     */
    protected Model $model;
    protected array $files;
    protected array $fileCollections;
    protected array $localizedAttributes;

    private array $reflectionMethods;

    /**
     * @throws ReflectionException
     */
    public function __construct()
    {
        if (!isset($this->class)) {
            throw new InvalidArgumentException('Class not set');
        }

        $this->initProperties();

        $this->initFiles();
        $this->initFileCollections();
        $this->initLocalizedAttributes();
    }

    /**
     * @throws ReflectionException
     */
    private function initProperties(): void
    {
        $this->attributes = $this->attributes ?? [];
        $this->authCreationAttributes = $this->authCreationAttributes ?? [];
        $this->authUpdateAttributes = $this->authUpdateAttributes ?? [];
        $this->searchAttributes = $this->searchAttributes ?? [];

        $this->model = new $this->class;
        $reflectionClass = new ReflectionClass($this->class);
        $this->reflectionMethods = $reflectionClass->getMethods();
    }

    private function initFiles(): void
    {
        if (!isset($this->files)) {
            $this->files = collect($this->reflectionMethods)
                ->filter(fn($method) => $method->isPublic())
                ->filter(fn($method) => $method->getReturnType() instanceof ReflectionNamedType)
                ->filter(fn($method) => $method->getReturnType()->getName() === MorphOne::class)
                ->filter(fn($method) => $this->model->{$method->getName()}()->getRelated() instanceof File)
                ->map(fn($method) => $method->getName())
                ->toArray();
        }
    }

    private function initFileCollections(): void
    {
        if (!isset($this->fileCollections)) {
            $this->fileCollections = collect($this->reflectionMethods)
                ->filter(fn($method) => $method->isPublic())
                ->filter(fn($method) => $method->getReturnType() instanceof ReflectionNamedType)
                ->filter(fn($method) => $method->getReturnType()?->getName() === MorphMany::class)
                ->filter(fn($method) => $this->model->{$method->getName()}()->getRelated() instanceof File)
                ->map(fn($method) => $method->getName())
                ->toArray();
        }
    }

    private function initLocalizedAttributes(): void
    {
        if (!isset($this->localizedAttributes)) {
            $this->localizedAttributes = collect($this->reflectionMethods)
                ->filter(fn($method) => $method->getName() === 'casts')
                ->flatMap(function ($method) {
                    if (!$method->isPublic()) {
                        $method->setAccessible(true);
                    }
                    $result = $method->invoke($this->model);
                    if (!$method->isPublic()) {
                        $method->setAccessible(false);
                    }
                    return $result;
                })
                ->filter(fn($cast) => $cast === \App\Casts\LocaleString::class)
                ->keys()
                ->toArray();
        }
    }

    /**
     * @param TModel $model
     * @return TModel
     * @throws Throwable
     * @noinspection PhpDocSignatureInspection
     */
    public function update(Model $model, array $attributes, int $attempts = 5): Model
    {
        DB::transaction(function () use ($model, $attributes) {
            $localizedAttributes = $this->getLocalizedAttributes($attributes, $model);
            $model->update(collect($attributes)
                ->only($this->attributes)
                ->merge($localizedAttributes)
                ->merge(collect($this->authUpdateAttributes)
                    ->mapWithKeys(fn($attribute) => [$attribute => auth()->id()])
                )
                ->toArray()
            );
        }, $attempts);

        foreach ($this->files as $file) {
            if (array_key_exists($file, $attributes)) {
                if ($attributes[$file]) {
                    FileService::create($model->$file(), $attributes[$file], attempts: $attempts);
                } else {
                    $model->$file()->delete();
                }
            }
        }
        foreach ($this->fileCollections as $fileCollection) {
            if (array_key_exists($fileCollection, $attributes)) {
                $model->$fileCollection()->delete();
                if ($attributes[$fileCollection]) {
                    foreach ($attributes[$fileCollection] as $file) {
                        FileService::create($model->$fileCollection(), $file, attempts: $attempts);
                    }
                }
            }
        }

        return $model;
    }

    private function getLocalizedAttributes(array $attributes, ?Model $model = null): array
    {
        $localizedAttributes = [];
        foreach ($this->localizedAttributes as $localizedAttribute) {
            $localeString = isset($model)
                ? ($model->$localizedAttribute ?? new LocaleString())
                : new LocaleString();
            if (!array_key_exists($localizedAttribute, $attributes)) {
                $values = collect($attributes)
                    ->only(collect(config('localized-routes.supported_locales'))
                        ->map(fn($locale) => "{$localizedAttribute}_$locale"));
                if ($values->count() > 1) {
                    foreach ($values as $key => $value) {
                        $locale = str($key)->chopStart("{$localizedAttribute}_")->toString();
                        $localeString[$locale] = $value;
                    }
                    $localizedAttributes[$localizedAttribute] = $localeString;
                }
                continue;
            }

            foreach ($attributes[$localizedAttribute] as $locale => $value) {
                $localeString[$locale] = $value;
            }
            $localizedAttributes[$localizedAttribute] = $localeString;
        }
        return $localizedAttributes;
    }

    /**
     * @return TModel
     * @throws Throwable
     * @noinspection PhpDocSignatureInspection
     */
    public function create(array $attributes, int $attempts = 5): Model
    {
        $model = DB::transaction(function () use ($attributes) {
            $localizedAttributes = $this->getLocalizedAttributes($attributes);
            return call_user_func([$this->class, 'create'], collect($attributes)
                ->only($this->attributes)
                ->merge($localizedAttributes)
                ->merge(collect($this->authCreationAttributes)
                    ->mapWithKeys(fn($attribute) => [$attribute => auth()->id()])
                )
                ->merge(collect($this->authUpdateAttributes)
                    ->mapWithKeys(fn($attribute) => [$attribute => auth()->id()])
                )
                ->toArray()
            );
        }, $attempts);

        foreach ($this->files as $file) {
            if (array_key_exists($file, $attributes) && $attributes[$file]) {
                FileService::create($model->$file(), $attributes[$file], attempts: $attempts);
            }
        }
        foreach ($this->fileCollections as $fileCollection) {
            if (array_key_exists($fileCollection, $attributes) && $attributes[$fileCollection]) {
                foreach ($attributes[$fileCollection] as $file) {
                    FileService::create($model->$fileCollection(), $file, attempts: $attempts);
                }
            }
        }

        return $model;
    }

    /**
     * @param string $search
     * @param Builder<TModel>|null $query
     * @return Builder<TModel>
     */
    public function search(string $search, ?Builder $query = null): Builder
    {
        $query = $query ?? $this->class::query();
        return $query->where(function ($query) use ($search) {
            foreach ($this->searchAttributes as $attribute) {
                $searchAttribute = str($attribute);
                $query->when($searchAttribute->contains('.'),
                    fn($query) => $query->orWhereHas($searchAttribute->beforeLast('.')->toString(),
                        fn($query) => $this->searchExpression(
                            $searchAttribute->afterLast('.')->toString(), $search, $query
                        )
                    ),
                    fn($query) => $query->orWhere(
                        fn($query) => $this->searchExpression($attribute, $search, $query)
                    )
                );
            }
        });
    }

    /**
     * @param string $attribute
     * @param string $search
     * @param Builder<TModel> $query
     * @return Builder<TModel>
     */
    protected function searchExpression(string $attribute, string $search, Builder $query): Builder
    {
        $escapedSearch = str_replace(
            ['\\', '%', '_', '['],
            ['\\\\', '\\%', '\\_', '\\['],
            $search);

        return $query->whereLike($attribute, "%$escapedSearch%");
    }
}
