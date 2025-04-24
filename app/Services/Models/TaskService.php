<?php

namespace App\Services\Models;

use App\Models\Task;

/**
 * @extends BaseModelService<Task>
 */
class TaskService extends BaseModelService
{
    public function __construct()
    {
        parent::__construct(Task::class, [
            'name',
            'description',
            'status',
            'price',
            'currency_code',
            'address',
            'estimated_date',
            'sub_category_id',
        ], [
            'customer_id',
        ]);
    }
}
