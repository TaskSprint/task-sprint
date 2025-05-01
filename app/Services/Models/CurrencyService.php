<?php

namespace App\Services\Models;

use App\Models\Currency;

/**
 * @extends BaseModelService<Currency>
 */
class CurrencyService extends BaseModelService
{
    protected string $class = Currency::class;
    protected array $attributes = [
        'code',
    ];
    protected array $searchAttributes = [
        'code',
    ];
}
