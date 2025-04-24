<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Facades\Models\UserService;
use App\Filament\Resources\UserResource;
use App\Models\User;
use App\Traits\Filament\MutateFiles;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Database\Eloquent\Model;
use Throwable;

class EditUser extends EditRecord
{
    use MutateFiles {
        mutateFormDataBeforeFill as filesMutateFormDataBeforeFill;
        mutateFormDataBeforeSave as filesMutateFormDataBeforeSave;
    }

    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        /**
         * @var User $record
         */
        $record = $this->getRecord();
        return [
            ...$this->filesMutateFormDataBeforeFill($data),
            "roles" => $record->roles->pluck("name")
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        if (array_key_exists("password", $data) && str($data["password"])->isEmpty()) {
            unset($data["password"]);
        }

        return $this->filesMutateFormDataBeforeSave($data);
    }

    /**
     * @throws Throwable
     */
    protected function handleRecordUpdate(Model $record, array $data): Model
    {
        return UserService::update($record, $data);
    }
}
