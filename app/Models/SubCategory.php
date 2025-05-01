<?php

namespace App\Models;

use App\Casts\LocaleString;
use App\Traits\Models\PolicyChecks;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;

class SubCategory extends Model
{
    use PolicyChecks, CascadesDeletes;

    protected array $cascadeDeletes = ['tasks', 'keywords'];

    protected $guarded = ['id'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class);
    }

    public function keywords(): MorphMany
    {
        return $this->morphMany(Keyword::class, 'keywordable');
    }

    protected function casts(): array
    {
        return [
            'name' => LocaleString::class,
        ];
    }
}
