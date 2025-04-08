<?php

namespace App\Models;

use App\Enums\TaskStatus;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;

class Task extends Model
{
    use CascadesDeletes;

    protected array $cascadeDeletes = ['order'];

    protected $guarded = ['id'];

    public function subCategory(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function customer(): BelongsTo
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

    public function order(): HasOne|Task
    {
        return $this->hasOne(TaskOrder::class);
    }

    public function currency(): BelongsTo
    {
        return $this->belongsTo(Currency::class, 'currency_code');
    }

    protected function casts(): array
    {
        return [
            'address' => 'array',
            'estimated_date' => 'date',
            'status' => TaskStatus::class,
        ];
    }
}
