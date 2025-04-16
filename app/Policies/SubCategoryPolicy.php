<?php

namespace App\Policies;

use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class SubCategoryPolicy
{
    use HandlesAuthorization;

    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, SubCategory $subCategory): bool
    {
        return true;
    }

    public function create(?User $user): bool
    {
        return $user?->hasPermissionTo('create sub-category');
    }

    public function update(?User $user, SubCategory $subCategory): bool
    {
        return $user?->hasPermissionTo('edit sub-category');
    }

    public function delete(?User $user, SubCategory $subCategory): bool
    {
        return $user?->hasPermissionTo('delete sub-category');
    }

    public function restore(?User $user, SubCategory $subCategory): bool
    {
        return $user?->hasPermissionTo('restore sub-category');
    }

    public function forceDelete(?User $user, SubCategory $subCategory): bool
    {
        return $user?->hasPermissionTo('force delete sub-category');
    }
}
