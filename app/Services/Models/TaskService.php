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
        'status',
        'price',
        'currency_code',
        'address',
        'estimated_date',
        'sub_category_id',
    ];
    protected array $authCreationAttributes = [
        'customer_id',
    ];

    protected array $searchAttributes = [
        'name',
        'description',
        'subCategory.name',
        'subCategory.category.name',
        'subCategory.keywords.name',
    ];
}
