<?php

namespace App\Traits\Filament;

use App\Models\File;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Livewire\Features\SupportFileUploads\FileUploadConfiguration;
use Livewire\Features\SupportFileUploads\TemporaryUploadedFile;
use ReflectionClass;
use ReflectionException;
use ReflectionNamedType;
use Storage;

trait MutateFiles
{
    protected ?array $fileAttributes = null;
    protected ?array $fileCollectionsAttributes = null;

    /**
     * @throws ReflectionException
     */
    protected function mutateFormDataBeforeFill(array $data): array
    {
        $model = $this->getRecord();
        foreach ($this->getFileAttributes() as $attribute) {
            $fileModel = $model->{$attribute};
            if ($fileModel) {
                $filename = $this->generateHashName($fileModel->name);
                $readStream = Storage::disk($fileModel->disk)->readStream($fileModel->path);
                Storage::disk(FileUploadConfiguration::disk())->writeStream(
                    FileUploadConfiguration::path() . '/' . $filename,
                    $readStream
                );
                $data[$attribute] = FileUploadConfiguration::path() . '/' . $filename;
            }
        }

        foreach ($this->getFileCollectionsAttributes() as $attribute) {
            $fileModels = $model->{$attribute};
            if ($fileModels) {
                foreach ($fileModels as $fileModel) {
                    $filename = $this->generateHashName($fileModel->name);
                    $readStream = Storage::disk($fileModel->disk)->readStream($fileModel->path);
                    Storage::disk(FileUploadConfiguration::disk())->writeStream(
                        FileUploadConfiguration::path() . '/' . $filename,
                        $readStream
                    );
                    if (!isset($data[$attribute])) {
                        $data[$attribute] = [];
                    }
                    $data[$attribute][] = FileUploadConfiguration::path() . '/' . $filename;
                }
            }
        }

        return $data;
    }

    /**
     * @throws ReflectionException
     */
    protected function getFileAttributes()
    {
        if ($this->fileAttributes === null) {
            $reflection = new ReflectionClass($this->getModel());
            $methods = collect($reflection->getMethods());
            $model = $this->getRecord();
            $this->fileAttributes = $methods
                ->filter(fn($method) => $method->isPublic())
                ->filter(fn($method) => $method->getReturnType() instanceof ReflectionNamedType)
                ->filter(fn($method) => $method->getReturnType()->getName() === MorphOne::class)
                ->filter(fn($method) => $model->{$method->getName()}()->getRelated() instanceof File)
                ->map(fn($method) => $method->getName())
                ->all();
        }

        return $this->fileAttributes;
    }

    protected static function generateHashName($filename): string
    {
        $hash = str()->random(30);
        $meta = str('-meta' . base64_encode($filename) . '-')->replace('/', '_');
        $extension = '.' . pathinfo($filename, PATHINFO_EXTENSION);

        return $hash . $meta . $extension;
    }

    /**
     * @throws ReflectionException
     */
    protected function getFileCollectionsAttributes()
    {
        if ($this->fileCollectionsAttributes === null) {
            $reflection = new ReflectionClass($this->getModel());
            $methods = collect($reflection->getMethods());
            $model = $this->getRecord();
            $this->fileCollectionsAttributes = $methods
                ->filter(fn($method) => $method->isPublic())
                ->filter(fn($method) => $method->getReturnType() instanceof ReflectionNamedType)
                ->filter(fn($method) => $method->getReturnType()?->getName() === MorphMany::class)
                ->filter(fn($method) => $model->{$method->getName()}()->getRelated() instanceof File)
                ->map(fn($method) => $method->getName())
                ->all();
        }

        return $this->fileCollectionsAttributes;
    }

    /**
     * @throws ReflectionException
     */
    protected function mutateFormDataBeforeSave(array $data): array
    {
        foreach ($this->getFileAttributes() as $attribute) {
            if (!key_exists($attribute, $data)) {
                $data[$attribute] = null;
            }
            if (is_string($data[$attribute])) {
                Storage::disk(FileUploadConfiguration::disk())->delete($data[$attribute]);
                unset($data[$attribute]);
            }
        }

        foreach ($this->getFileCollectionsAttributes() as $attribute) {
            if (!key_exists($attribute, $data)) {
                $data[$attribute] = [];
            }
            $data[$attribute] = collect($data[$attribute])
                ->map(fn($file) => is_string($file) ? TemporaryUploadedFile::createFromLivewire(str($file)
                    ->after(FileUploadConfiguration::path())
                    ->value()) : $file)
                ->all();
        }

        return parent::mutateFormDataBeforeSave($data);
    }
}
