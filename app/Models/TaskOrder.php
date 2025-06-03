<?php

namespace App\Models;

use App\Enums\TaskOrderStatus;
use App\Traits\Models\PolicyChecks;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;

class TaskOrder extends Model
{
    use PolicyChecks, CascadesDeletes;

    public $incrementing = false;
    protected array $cascadeDeletes = ['review'];
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

    public function review(): HasOne
    {
        return $this->hasOne(Review::class, 'task_order_id');
    }

    protected function casts(): array
    {
        return [
            'status' => TaskOrderStatus::class,
        ];
    }
}
