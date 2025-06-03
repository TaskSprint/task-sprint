<?php

namespace App\Policies;

use App\Models\Review;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReviewPolicy
{
    use HandlesAuthorization;

    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, Review $review): bool
    {
        return true;
    }

    public function create(?User $user): bool
    {
        return (bool)$user?->hasPermissionTo('create review');
    }

    public function update(?User $user, Review $review): bool
    {
        return $user?->hasPermissionTo('edit review') && $user?->id === $review->taskOrder->customer_id ||
            $user?->hasPermissionTo('force edit review');
    }

    public function delete(?User $user, Review $review): bool
    {
        return $user?->hasPermissionTo('delete review') && $user?->id === $review->taskOrder->customer_id ||
            $user?->hasPermissionTo('force delete review');
    }

    public function restore(?User $user, Review $review): bool
    {
        return (bool)$user?->hasPermissionTo('restore review');
    }

    public function forceDelete(?User $user, Review $review): bool
    {
        return (bool)$user?->hasPermissionTo('force delete review');
    }
}
