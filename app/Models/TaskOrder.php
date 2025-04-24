<?php

namespace App\Models;

use App\Enums\TaskOrderStatus;
use App\Traits\Models\PolicyChecks;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TaskOrder extends Model
{
    use PolicyChecks;

    public $incrementing = false;
    protected $primaryKey = 'task_id';

    protected $guarded = [];

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
