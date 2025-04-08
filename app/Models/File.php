<?php

namespace App\Models;

use DateTimeInterface;
use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Support\Facades\Storage;

class File extends Model
{
    protected $guarded = ['id'];

    protected static function booted(): void
    {
        static::deleting(function (File $file) {
            try {
                if (Storage::disk($file->disk)->exists($file->path)) {
                    Storage::disk($file->disk)->delete($file->path);
                }
            } catch (Exception $e) {
                return false;
            }
            return null;
        });
    }

    public function fileable(): MorphTo
    {
        return $this->morphTo();
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getTemporaryUrl(?DateTimeInterface $expiration = null): string
    {
        return Storage::disk($this->disk)->temporaryUrl(
            $this->path,
            $expiration ?? now()->addDay()->endOfHour(),
            ['ResponseContentDisposition' => 'attachment; filename="' . urlencode($this->name) . '"']);
    }
}
