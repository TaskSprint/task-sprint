<?php

namespace App\Filament\Resources\CurrencyResource\Pages;

use App\Facades\Models\CurrencyService;
use App\Filament\Resources\CurrencyResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class CreateCurrency extends CreateRecord
{
    protected static string $resource = CurrencyResource::class;

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
        return CurrencyService::create($data);
    }
}
