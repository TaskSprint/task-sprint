<?php

namespace App\Services\Models;

use App\Models\TaskOrder;

/**
 * @extends BaseModelService<TaskOrder>
 */
class TaskOrderService extends BaseModelService
{
    protected string $class = TaskOrder::class;
    protected array $attributes = [
        'task_id',
        'status',
        'employee_id',
    ];
}
