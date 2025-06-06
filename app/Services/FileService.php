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
     * @param MorphOneOrMany<File, Model, ?File> $relation
     *
     * @throws Throwable
     */
    public function create(MorphOneOrMany $relation, UploadedFile $file, ?string $disk = null, int $attempts = 5): File
    {
        if (!$relation->getRelated() instanceof File) {
            throw new InvalidArgumentException("Invalid relation: {$relation->getRelated()->getMorphClass()}, expected " . File::class);
        }

        if ($relation instanceof MorphOne && $relation->exists()) {
            $relation->first()->delete();
        }

        return DB::transaction(function () use ($file, $relation, $disk) {
            $relationClass = $relation->getMorphClass();
            $path =
                (Str::startsWith($file->getMimeType(), "image/")
                    ? "images"
                    : "files")
                . '/' . new $relationClass()->getTable();

            $fileModel = $relation->create([
                'name' => $file->getClientOriginalName(),
                'mime_type' => $file->getMimeType(),
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
}
