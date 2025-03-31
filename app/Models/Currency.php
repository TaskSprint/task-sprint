<?php

namespace App\Models;

use App\Casts\LocaleString;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Currency extends Model
{
    public $incrementing = false;
    protected $guarded = ['id'];
    protected $primaryKey = 'code';

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
