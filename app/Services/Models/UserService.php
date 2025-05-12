<?php

namespace App\Services\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

/**
 * @extends BaseModelService<User>
 */
class UserService extends BaseModelService
{
    protected string $class = User::class;
    protected array $attributes = [
        'name',
        'email',
        'phone',
        'city',
        'password',
    ];
    protected array $searchAttributes = [
        'name',
        'email',
    ];

    public function create(array $attributes, int $attempts = 5): Model
    {
        $attributes = $this->updatePassword($attributes);
        /**
         * @var User $model
         */
        $model = parent::create($attributes, $attempts);
        $model->sendEmailVerificationNotification();
        return $this->addRoles($model, $attributes);
    }

    protected function updatePassword(array $data): array
    {
        if (isset($data['password'])) {
            $data['password'] = bcrypt($data['password']);
        }

        return $data;
    }

    protected function addRoles(User $model, array $data): User
    {
        if (isset($data['roles'])) {
            $model->syncRoles($data['roles']);
        }
        if (isset($data['role'])) {
            $model->syncRoles($data['role']);
        }

        return $model;
    }

    public function update(Model $model, array $attributes, int $attempts = 5): Model
    {
        $attributes = $this->updatePassword($attributes);
        $model = parent::update($model, $attributes, $attempts);
        return $this->addRoles($model, $attributes);
    }
}
