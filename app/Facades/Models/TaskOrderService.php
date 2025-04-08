<?php

namespace App\Facades\Models;

use Illuminate\Support\Facades\Facade;

/**
 * @see \App\Services\Models\TaskOrderService
 */
class TaskOrderService extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return \App\Services\Models\TaskOrderService::class;
    }
}
