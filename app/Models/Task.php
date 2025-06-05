<?php

namespace App\Models;

use App\Enums\TaskStatus;
use App\Traits\Models\PolicyChecks;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use ShiftOneLabs\LaravelCascadeDeletes\CascadesDeletes;

class Task extends Model
{
    use PolicyChecks, CascadesDeletes;

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

    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable');
    }

    protected function casts(): array
    {
        return [
            'address' => 'array',
            'estimated_date' => 'datetime',
            'status' => TaskStatus::class,
        ];
    }
}
