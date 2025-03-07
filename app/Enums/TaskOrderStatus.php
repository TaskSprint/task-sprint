<?php

namespace App\Enums;

enum TaskOrderStatus: string
{
    case Pending = 'pending';
    case PendingForCompletion = 'pending for completion';
    case Completed = 'completed';
}
