<?php

namespace App\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasLabel;

enum TaskStatus: string implements HasLabel, HasColor
{
    case Pending = 'pending';
    case PendingForExecutor = 'pending for executor';
    case InProgress = 'in progress';
    case Completed = 'completed';
    case Cancelled = 'cancelled';


    public function getLabel(): ?string
    {
        return match ($this) {
            self::Pending => __('tasks.pending'),
            self::PendingForExecutor => __('tasks.pending_for_executor'),
            self::InProgress => __('tasks.in_progress'),
            self::Completed => __('tasks.completed'),
            self::Cancelled => __('tasks.canceled'),
        };
    }

    public function getColor(): ?string
    {
        return match ($this) {
            self::InProgress => 'info',
            self::Completed => 'success',
            self::Cancelled => 'danger',
            self::PendingForExecutor => 'warning',
            default => 'primary',
        };
    }
}
