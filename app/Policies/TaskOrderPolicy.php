<?php

namespace App\Policies;

use App\Models\TaskOrder;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskOrderPolicy
{
    use HandlesAuthorization;

    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, TaskOrder $taskOrder): bool
    {
        return $taskOrder->employee_id === $user?->id ||
            $taskOrder->task->customer_id === $user?->id;
    }

    public function create(?User $user): bool
    {
        return (bool)$user?->hasPermissionTo('create task order');
    }

    public function update(?User $user, TaskOrder $taskOrder): bool
    {
        return
            $user?->hasPermissionTo('edit task order') &&
            ($taskOrder->employee_id === $user?->id || $taskOrder->task->customer_id === $user?->id) ||
            $user?->hasPermissionTo('force edit task order');
    }

    public function delete(?User $user, TaskOrder $taskOrder): bool
    {
        return $user?->hasPermissionTo('delete task order') && $taskOrder->task->customer_id === $user?->id ||
            $user?->hasPermissionTo('force delete task order');
    }

    public function restore(?User $user, TaskOrder $taskOrder): bool
    {
        return (bool)$user?->hasPermissionTo('restore task order');
    }

    public function forceDelete(?User $user, TaskOrder $taskOrder): bool
    {
        return (bool)$user?->hasPermissionTo('force delete task order');
    }
}
