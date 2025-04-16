<?php

namespace App\Policies;

use App\Models\Currency;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CurrencyPolicy
{
    use HandlesAuthorization;

    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, Currency $currency): bool
    {
        return true;
    }

    public function create(?User $user): bool
    {
        return $user?->hasPermissionTo('create currency');
    }

    public function update(?User $user, Currency $currency): bool
    {
        return $user?->hasPermissionTo('edit currency');
    }

    public function delete(?User $user, Currency $currency): bool
    {
        return $user?->hasPermissionTo('delete currency');
    }

    public function restore(?User $user, Currency $currency): bool
    {
        return $user?->hasPermissionTo('restore currency');
    }

    public function forceDelete(?User $user, Currency $currency): bool
    {
        return $user?->hasPermissionTo('force delete currency');
    }
}
