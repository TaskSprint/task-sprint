<?php

namespace App\Models;

use App\Casts\LocaleString;
use App\Traits\Models\PolicyChecks;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;

class Category extends Model
{
    use PolicyChecks, CascadesDeletes;

    protected $cascadeDeletes = ['icon', 'subCategories'];
    protected $guarded = ['id'];

    public function icon(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable');
    }

    public function subCategories(): HasMany
    {
        return $this->hasMany(SubCategory::class);
    }

    protected function casts(): array
    {
        return [
            'name' => LocaleString::class,
        ];
    }
}
