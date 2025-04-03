<?php

namespace App\Services\Models;

use App\Models\User;

/**
 * @extends BaseModelService<User>
 */
class UserService extends BaseModelService
{
    public function __construct()
    {
        parent::__construct(User::class, [
            'name',
            'email',
            'password',
        ]);
    }
}
