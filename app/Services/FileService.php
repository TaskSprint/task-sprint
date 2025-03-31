<?php

namespace App\Services;

use App\Models\File;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphOneOrMany;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use PHPUnit\Event\InvalidArgumentException;
use Throwable;

class FileService
{
    /**
     * @throws Throwable
     */
    public function create(Model $model, UploadedFile $file, string $relation, ?string $disk = null, int $attempts = 5): File
    {
        if (!$model->$relation() instanceof MorphOneOrMany
            || !$model->$relation()->getRelated() instanceof File) {
            throw new InvalidArgumentException("Invalid relation: $relation");
        }

        /** @var MorphOneOrMany<File, Model, ?File> $fileRelation */
        $fileRelation = $model->$relation();

        if ($fileRelation instanceof MorphOne && $fileRelation->exists()) {
            $this->delete($fileRelation->first());
        }

        return DB::transaction(function () use ($model, $file, $fileRelation, $disk) {
            $path =
                (Str::startsWith($file->getClientMimeType(), "image/")
                    ? "images"
                    : "files")
                . '/' . $model->getTable();

            $fileModel = $fileRelation->create([
                'name' => $file->getClientOriginalName(),
                'mime_type' => $file->getClientMimeType(),
                'size' => $file->getSize(),
                'path' => $file->hashName($path),
                'disk' => $disk ?? config('filesystems.default'),
                'user_id' => auth()->id(),
            ]);

            Storage::disk($disk ?? config('filesystems.default'))->putFileAs(
                $path,
                $file,
                $file->hashName()
            );

            return $fileModel;
        }, $attempts);
    }

    /**
     * @throws Throwable
     */
    public function delete(File $file, int $attempts = 5): void
    {
        DB::transaction(function () use ($file) {
            $file->delete();
            Storage::disk($file->disk)->delete($file->path);
        }, $attempts);
    }
}
