<?php

namespace App\Facades\Models;

use Illuminate\Support\Facades\Facade;

/**
 * @see \App\Services\Models\SubCategoryService
 */
class SubCategoryService extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return \App\Services\Models\SubCategoryService::class;
    }
}
