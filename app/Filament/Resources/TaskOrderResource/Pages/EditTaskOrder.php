<?php

namespace App\Filament\Resources\TaskOrderResource\Pages;

use App\Facades\Models\TaskOrderService;
use App\Filament\Resources\TaskOrderResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class EditTaskOrder extends EditRecord
{
    protected static string $resource = TaskOrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    /**
     * @throws Throwable
     */
    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        return TaskOrderService::update($record, $data);
    }
}
