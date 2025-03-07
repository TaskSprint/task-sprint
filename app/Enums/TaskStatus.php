<?php

namespace App\Enums;

enum TaskStatus: string
{
    case Pending = 'pending';
    case PendingForExecutor = 'pending for executor';
    case InProgress = 'in progress';
    case Completed = 'completed';
    case Cancelled = 'cancelled';
}
