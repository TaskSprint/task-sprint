<?php

namespace App\Policies;

use App\Models\Keyword;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class KeywordPolicy
{
    use HandlesAuthorization;

    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, Keyword $keyword): bool
    {
        return true;
    }

    public function create(?User $user): bool
    {
        return (bool)$user?->hasPermissionTo('create keyword');
    }

    public function update(?User $user, Keyword $keyword): bool
    {
        return (bool)$user?->hasPermissionTo('edit keyword');
    }

    public function delete(?User $user, Keyword $keyword): bool
    {
        return (bool)$user?->hasPermissionTo('delete keyword');
    }

    public function restore(?User $user, Keyword $keyword): bool
    {
        return (bool)$user?->hasPermissionTo('restore keyword');
    }

    public function forceDelete(?User $user, Keyword $keyword): bool
    {
        return (bool)$user?->hasPermissionTo('force delete keyword');
    }
}
