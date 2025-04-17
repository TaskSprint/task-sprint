<?php

namespace App\Policies;

use App\Models\Category;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CategoryPolicy
{
    use HandlesAuthorization;

    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, Category $category): bool
    {
        return true;
    }

    public function create(?User $user): bool
    {
        return (bool)$user?->hasPermissionTo('create category');
    }

    public function update(?User $user, Category $category): bool
    {
        return (bool)$user?->hasPermissionTo('edit category');
    }

    public function delete(?User $user, Category $category): bool
    {
        return (bool)$user?->hasPermissionTo('delete category');
    }

    public function restore(?User $user, Category $category): bool
    {
        return (bool)$user?->hasPermissionTo('restore category');
    }

    public function forceDelete(?User $user, Category $category): bool
    {
        return (bool)$user?->hasPermissionTo('force delete category');
    }
}
