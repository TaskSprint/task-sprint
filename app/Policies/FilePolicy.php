<?php

namespace App\Policies;

use App\Models\File;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class FilePolicy
{
    use HandlesAuthorization;

    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, File $file): bool
    {
        return true;
    }

    public function create(?User $user): bool
    {
        return true;
    }

    public function update(?User $user, File $file): bool
    {
        return
            $user?->hasPermissionTo('edit file') &&
            $file->user_id !== null && $user?->id === $file->user_id ||
            $user?->hasPermissionTo('force edit file');
    }

    public function delete(?User $user, File $file): bool
    {
        return
            $user?->hasPermissionTo('delete file') &&
            $file->user_id !== null && $user?->id === $file->user_id ||
            $user?->hasPermissionTo('force delete file');
    }

    public function restore(?User $user, File $file): bool
    {
        return $user?->hasPermissionTo('restore file');
    }

    public function forceDelete(?User $user, File $file): bool
    {
        return $user?->hasPermissionTo('force delete file');
    }
}
