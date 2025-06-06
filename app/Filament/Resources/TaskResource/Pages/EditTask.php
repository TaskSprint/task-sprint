<?php

namespace App\Filament\Resources\TaskResource\Pages;

use App\Facades\Models\TaskService;
use App\Filament\Resources\TaskResource;
use App\Traits\Filament\MutateFiles;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class EditTask extends EditRecord
{
    use MutateFiles;

    protected static string $resource = TaskResource::class;

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
        return TaskService::update($record, $data);
    }
}
