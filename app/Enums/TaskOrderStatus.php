<?php

namespace App\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasLabel;

enum TaskOrderStatus: string implements HasLabel, HasColor
{
    case Pending = 'pending';
    case PendingForCompletion = 'pending for completion';
    case Completed = 'completed';


    public function getColor(): string|array|null
    {
        return match ($this) {
            self::PendingForCompletion => 'info',
            self::Completed => 'success',
            default => 'primary',
        };
    }

    public function getLabel(): ?string
    {
        return match ($this) {
            self::Pending => __('task-orders.pending'),
            self::PendingForCompletion => __('task-orders.pending_for_completion'),
            self::Completed => __('task-orders.completed'),
        };
    }
}
