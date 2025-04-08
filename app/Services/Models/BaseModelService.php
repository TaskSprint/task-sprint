<?php

namespace App\Services\Models;

use App\Facades\FileService;
use App\Models\File;
use App\ValueObjects\LocaleString;
use DB;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use ReflectionClass;
use ReflectionException;
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
    protected array $authCreatedAttributes;
    protected array $authUpdatedAttributes;

    /**
     * @var TModel
     * @noinspection PhpDocFieldTypeMismatchInspection
     */
    protected Model $model;
    protected array $files = [];
    protected array $fileCollections = [];
    protected array $localizedAttributes = [];

    /**
     * @param class-string<TModel> $class
     * @throws ReflectionException
     * @noinspection PhpExpressionResultUnusedInspection
     */
    protected function __construct(string $class, array $attributes, array $authCreatedAttributes = [], array $authUpdatedAttributes = [])
    {
        $this->class = $class;
        $this->attributes = $attributes;
        $this->authCreatedAttributes = $authCreatedAttributes;
        $this->authUpdatedAttributes = $authUpdatedAttributes;

        $this->model = new $class;
        $reflection = new ReflectionClass($class);
        $methods = $reflection->getMethods();

        foreach ($methods as $method) {
            if ($method->isPublic() &&
                $method->getReturnType()?->getName() === MorphOne::class &&
                $this->model->{$method->getName()}()->getRelated() instanceof File
            ) {
                $this->files[] = $method->getName();
            }

            if ($method->isPublic() &&
                $method->getReturnType()?->getName() === MorphMany::class &&
                $this->model->{$method->getName()}()->getRelated() instanceof File
            ) {
                $this->fileCollections[] = $method->getName();
            }

            if ($method->getName() === 'casts') {
                if (!$method->isPublic()) {
                    $method->setAccessible(true);
                }

                $casts = $method->invoke($this->model);
                $this->localizedAttributes = collect($casts)
                    ->filter(fn($cast) => $cast === \App\Casts\LocaleString::class)
                    ->keys()
                    ->toArray();

                if (!$method->isPublic()) {
                    $method->setAccessible(false);
                }
            }
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
                ->merge(collect($this->authUpdatedAttributes)
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
                    FileService::delete($model->$file, $attempts);
                }
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

    private function getLocalizedAttributes(array $attributes, ?Model $model = null): array
    {
        $localizedAttributes = [];
        foreach ($this->localizedAttributes as $localizedAttribute) {
            if (!array_key_exists($localizedAttribute, $attributes)) {
                $values = collect($attributes)
                    ->only(collect(config('localized-routes.supported_locales'))
                        ->map(fn($locale) => "{$localizedAttribute}_$locale"));
                if ($values->count() > 1) {
                    $localeString = isset($model)
                        ? ($model->$localizedAttribute ?? new LocaleString())
                        : new LocaleString();
                    foreach ($values as $key => $value) {
                        $locale = str($key)->chopStart("{$localizedAttribute}_")->toString();
                        $localeString[$locale] = $value;
                    }
                    $localizedAttributes[$localizedAttribute] = $localeString;
                }
            }
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
                ->merge(collect($this->authCreatedAttributes)
                    ->mapWithKeys(fn($attribute) => [$attribute => auth()->id()])
                )
                ->merge(collect($this->authUpdatedAttributes)
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
}
