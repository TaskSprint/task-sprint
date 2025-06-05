<?php

namespace App\Services\Models;

use App\Models\Task;

/**
 * @extends BaseModelService<Task>
 */
class TaskService extends BaseModelService
{
    protected string $class = Task::class;
    protected array $attributes = [
        'name',
        'description',
        'secret_description',
        'payment_details',
        'status',
        'price',
        'currency_code',
        'address',
        'estimated_date',
        'sub_category_id',
        'negotiable',
    ];
    protected array $authCreationAttributes = [
        'customer_id',
    ];

    protected array $searchAttributes = [
        'name',
        'description'
    ];
}
