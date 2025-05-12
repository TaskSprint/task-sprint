<?php

namespace App\Models;

use App\Casts\LocaleString;
use App\Traits\Models\PolicyChecks;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;

class Currency extends Model
{
    use PolicyChecks, CascadesDeletes;

    public $incrementing = false;
    protected array $cascadeDeletes = ['tasks'];
    protected $primaryKey = 'code';
    protected $keyType = 'string';

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class, 'currency_code');
    }

    protected function casts(): array
    {
        return [
            'name' => LocaleString::class,
        ];
    }
}
