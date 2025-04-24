<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Facades\Models\CategoryService;
use App\Filament\Resources\CategoryResource;
use App\Traits\Filament\MutateFiles;
use Debugbar;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class EditCategory extends EditRecord
{
    use MutateFiles;

    protected static string $resource = CategoryResource::class;

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
        Debugbar::info($data);
        return CategoryService::update($record, $data);
    }
    
}
