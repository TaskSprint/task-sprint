<?php

namespace App\Http\Controllers;

use App\Enums\TaskOrderStatus;
use App\Facades\Models\TaskOrderService;
use App\Facades\Models\TaskService;
use App\Http\Requests\TaskPostRequest;
use App\Http\Resources\SubCategoryResource;
use App\Http\Resources\UserResource;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Throwable;

class TaskCreationController extends Controller
{
    public function index(SubCategory $subCategory, Request $request)
    {
        $employeeId = $request->query("e");
        $employee = $employeeId ? User::with('avatar')->find($employeeId) : null;
        $employees = $employee ? null : User::with('avatar')
            ->orderByPowerJoinsCount('taskOrders.task_id', 'desc')
            ->joinRelationship('taskOrders.task')
            ->where('task_orders.status', TaskOrderStatus::Completed)
            ->where('tasks.sub_category_id', $subCategory->id)
            ->limit(5)
            ->get();
        return Inertia::render('TaskCreation', [
            'subCategory' => new SubCategoryResource($subCategory->load('category')),
            'employees' => $employees ? UserResource::collection($employees) : null,
            'employee' => $employee ? new UserResource($employee) : null,
        ]);
    }

    /**
     * @throws Throwable
     */
    public function store(TaskPostRequest $request)

    {
        $validated = $request->validated();

        $task = TaskService::create($validated);
        if (isset($validated['employee_id'])) {
            TaskOrderService::create([
                'status' => TaskOrderStatus::Pending,
                'employee_id' => $validated['employee_id'],
                'task_id' => $task->id,
            ]);
        }

        return redirect(route('task.index', ['task' => $task->id]));
    }
}
