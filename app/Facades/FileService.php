<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @see \App\Services\FileService
 */
class FileService extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return \App\Services\FileService::class;
    }
}
