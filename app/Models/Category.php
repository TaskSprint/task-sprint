<?php

namespace App\Models;

use App\Casts\LocaleString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Category extends Model
{
    protected $guarded = ['id'];

    public function icon(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable');
    }

    public function subCategories(): HasMany
    {
        return $this->hasMany(Category::class, 'parent_id');
    }

    protected function casts(): array
    {
        return [
            'name' => LocaleString::class,
        ];
    }
}
