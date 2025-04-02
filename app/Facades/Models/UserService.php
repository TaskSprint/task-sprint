<?php

namespace App\Facades\Models;

use Illuminate\Support\Facades\Facade;

/**
 * @see \App\Services\Models\UserService
 */
class UserService extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return \App\Services\Models\UserService::class;
    }
}
