<?php

namespace App\Filament\Resources\CategoryResource\Pages;

use App\Facades\Models\CategoryService;
use App\Filament\Resources\CategoryResource;
use App\Models\Category;
use App\Models\File;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;
use Livewire\Features\SupportFileUploads\FileUploadConfiguration;
use Storage;
use Throwable;

class EditCategory extends EditRecord
{
    protected static string $resource = CategoryResource::class;

    protected function mutateFormDataBeforeFill(array $data): array
    {
        /***
         * @var File $iconModel
         ***/
        $iconModel = Category::find($data['id'])->icon;
        if ($iconModel) {
            $filename = $this->generateHashName($iconModel->name);
            $readStream = Storage::disk($iconModel->disk)->readStream($iconModel->path);
            Storage::disk(FileUploadConfiguration::disk())->writeStream(
                FileUploadConfiguration::path() . '/' . $filename,
                $readStream
            );
            $data['icon'] = FileUploadConfiguration::path() . '/' . $filename;
        }

        return $data;
    }

    private static function generateHashName($filename): string
    {
        $hash = str()->random(30);
        $meta = str('-meta' . base64_encode($filename) . '-')->replace('/', '_');
        $extension = '.' . pathinfo($filename, PATHINFO_EXTENSION);

        return $hash . $meta . $extension;
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    /**
     * @throws Throwable
     */
    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        if (!key_exists('icon', $data)) {
            $data['icon'] = null;
        }
        if (is_string($data['icon'])) {
            Storage::disk(FileUploadConfiguration::disk())->delete($data['icon']);
            unset($data['icon']);
        }
        return CategoryService::update($record, $data);
    }
}
