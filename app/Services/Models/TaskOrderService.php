<?php

namespace App\Services\Models;

use App\Models\TaskOrder;

/**
 * @extends BaseModelService<TaskOrder>
 */
class TaskOrderService extends BaseModelService
{
    public function __construct()
    {
        parent::__construct(TaskOrder::class, [
            'task_id',
            'status',
            'employee_id',
        ]);
    }
}
