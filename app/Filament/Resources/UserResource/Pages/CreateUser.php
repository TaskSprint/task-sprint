<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Facades\Models\UserService;
use App\Filament\Resources\UserResource;
use Barryvdh\Debugbar\Facades\Debugbar;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [

        ];
    }

    /**
     * @throws Throwable
     */
    protected function handleRecordCreation(array $data): Model
    {
        Debugbar::info($data);
        return UserService::create($data);
    }
}
