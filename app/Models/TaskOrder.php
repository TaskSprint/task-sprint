<?php

namespace App\Models;

use App\Enums\TaskOrderStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TaskOrder extends Model
{
    public $incrementing = false;
    protected $primaryKey = 'task_id';

    public function task(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }

    public function employee(): BelongsTo
    {
        return $this->belongsTo(User::class, 'employee_id');
    }

    protected function casts(): array
    {
        return [
            'status' => TaskOrderStatus::class,
        ];
    }
}
