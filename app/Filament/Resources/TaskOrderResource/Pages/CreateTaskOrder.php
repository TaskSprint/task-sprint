<?php

namespace App\Filament\Resources\TaskOrderResource\Pages;

use App\Facades\Models\TaskOrderService;
use App\Filament\Resources\TaskOrderResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class CreateTaskOrder extends CreateRecord
{
    protected static string $resource = TaskOrderResource::class;

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
        return TaskOrderService::create($data);
    }
}
