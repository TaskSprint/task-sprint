<?php

namespace App\Services\Models;

use App\Enums\TaskStatus;
use App\Models\Task;
use Illuminate\Database\Eloquent\Model;

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

    public function create(array $attributes, int $attempts = 5): Model
    {
        $status = isset($attributes['employee_id']) ? TaskStatus::PendingForExecutor : TaskStatus::Pending;
        $attributes['status'] = $attributes['status'] ?? $status;
        return parent::create($attributes, $attempts);
    }
}
