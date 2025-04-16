<?php

namespace App\Policies;

use App\Models\Task;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TaskPolicy
{
    use HandlesAuthorization;

    public function viewAny(?User $user): bool
    {
        return true;
    }

    public function view(?User $user, Task $task): bool
    {
        return true;
    }

    public function create(?User $user): bool
    {
        return $user?->hasPermissionTo('create task');
    }

    public function update(?User $user, Task $task): bool
    {
        return $user?->hasPermissionTo('edit task') && $user?->id === $task->customer_id ||
            $user?->hasPermissionTo('force edit task');
    }

    public function delete(?User $user, Task $task): bool
    {
        return $user?->hasPermissionTo('delete task') && $user?->id === $task->customer_id ||
            $user?->hasPermissionTo('force delete task');
    }

    public function restore(?User $user, Task $task): bool
    {
        return $user?->hasPermissionTo('restore task');
    }

    public function forceDelete(?User $user, Task $task): bool
    {
        return $user?->hasPermissionTo('force delete task');
    }

    public function assign(?User $user, Task $task): bool
    {
        return $user?->hasPermissionTo('assign to tasks') && $task->order === null;
    }
}
