<?php

namespace App\Enums;

use Filament\Support\Contracts\HasColor;
use Filament\Support\Contracts\HasLabel;

enum Roles: string implements HasLabel, HasColor
{
    case Customer = 'customer';
    case Employee = 'employee';
    case Admin = 'admin';

    public function getLabel(): ?string
    {
        return match ($this) {
            self::Customer => __('users.customer'),
            self::Employee => __('users.employee'),
            self::Admin => __('users.admin'),
        };
    }

    public function getColor(): ?string
    {
        return match ($this) {
            self::Customer => 'primary',
            self::Employee => 'info',
            self::Admin => 'success',
        };
    }
}
