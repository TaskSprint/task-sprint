<?php

namespace App\Services\Models;

use App\Models\Currency;

/**
 * @extends BaseModelService<Currency>
 */
class CurrencyService extends BaseModelService
{
    public function __construct()
    {
        parent::__construct(Currency::class, [
            'code',
        ]);
    }
}
