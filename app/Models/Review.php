<?php

namespace App\Models;

use App\Traits\Models\PolicyChecks;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Review extends Model
{
    use PolicyChecks;

    protected $guarded = ['id'];

    public function taskOrder(): BelongsTo
    {
        return $this->belongsTo(TaskOrder::class, 'task_order_id');
    }
}
