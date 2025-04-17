<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, User $model): bool
    {
        return true;
    }

    public function create(?User $user): bool
    {
        return true;
    }

    public function update(?User $user, User $model): bool
    {
        return $user?->hasPermissionTo('edit user') && $user?->id === $model->id ||
            $user?->hasPermissionTo('force edit user');
    }

    public function delete(?User $user, User $model): bool
    {
        return $user?->hasPermissionTo('delete user') && $user?->id === $model->id ||
            $user?->hasPermissionTo('force delete user');
    }

    public function restore(?User $user, User $model): bool
    {
        return (bool)$user?->hasPermissionTo('restore user');
    }

    public function forceDelete(?User $user, User $model): bool
    {
        return (bool)$user?->hasPermissionTo('force delete user');
    }
}
