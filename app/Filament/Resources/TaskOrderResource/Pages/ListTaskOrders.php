<?php

namespace App\Filament\Resources\TaskOrderResource\Pages;

use App\Filament\Resources\TaskOrderResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListTaskOrders extends ListRecords
{
    protected static string $resource = TaskOrderResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
