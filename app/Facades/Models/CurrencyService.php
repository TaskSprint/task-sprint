<?php

namespace App\Facades\Models;

use Illuminate\Support\Facades\Facade;

/**
 * @see \App\Services\Models\CurrencyService
 */
class CurrencyService extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return \App\Services\Models\CurrencyService::class;
    }
}
