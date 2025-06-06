<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function index(Task $task)
    {
        return Inertia::render('Task', [
            'task' => new TaskResource($task->load(['customer.avatar', 'files', 'subCategory', 'order.employee.avatar', 'subCategory.category'])),
        ]);
    }
}
