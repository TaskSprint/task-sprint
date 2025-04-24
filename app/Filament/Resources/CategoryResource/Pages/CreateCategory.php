<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Facades\Models\CategoryService;
use App\Filament\Resources\CategoryResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class CreateCategory extends CreateRecord
{
    protected static string $resource = CategoryResource::class;

    /**
     * @throws Throwable
     */
    protected function handleRecordCreation(array $data): Model
    {
        return CategoryService::create($data);
    }
}
