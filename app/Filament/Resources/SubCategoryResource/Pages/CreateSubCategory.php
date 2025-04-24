<?php

namespace App\Filament\Resources\SubCategoryResource\Pages;

use App\Facades\Models\SubCategoryService;
use App\Filament\Resources\SubCategoryResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class CreateSubCategory extends CreateRecord
{
    protected static string $resource = SubCategoryResource::class;

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
        return SubCategoryService::create($data);
    }
}
