<?php

namespace App\Traits\Models;

use Gate;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Seeder;
use Illuminate\Events\Dispatcher;

trait PolicyChecks
{
    protected bool $checkViewPolicy = false;

    public static function bootPolicyChecks(): void
    {
        if (self::checkIsInSeeder()) {
            return;
        }

        if (self::checkPolicy('view', self::class)) {
            self::retrieved(function ($model) {
                if ($model->checkViewPolicy && self::checkPolicy('view', $model)) {
                    Gate::authorize('view', $model);
                }
            });
        }

        self::makeEvent('creating', 'create');
        self::makeEvent('updating', 'update');
        self::makeEvent('deleting', 'delete');

        if (collect(class_uses_recursive(static::class))->contains(SoftDeletes::class)) {
            self::makeEvent('restoring', 'restore');
            self::makeEvent('forceDeleting', 'forceDelete');
        }
    }

    protected static function checkIsInSeeder(): bool
    {
        $backtrace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
        return collect($backtrace)->contains(fn($item) => isset($item['class']) &&
            is_subclass_of($item['class'], Seeder::class));
    }

    protected static function checkPolicy(string $ability, $model): bool
    {
        $policy = Gate::getPolicyFor($model);
        return $policy && method_exists($policy, $ability);
    }

    protected static function makeEvent(string $method, string $authority): void
    {
        if (self::checkPolicy($authority, self::class)) {
            self::{$method}(function ($model) use ($authority) {
                if (self::checkPolicy($authority, $model)) {
                    Gate::authorize($authority, $model);
                }
            });
        }
    }

    protected static function checkBacktrace(): bool
    {
        $backtrace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
        $invokeListenerCount = collect($backtrace)->filter(fn($item) => isset($item['function']) &&
            isset($item['class']) &&
            $item['function'] === 'invokeListeners' &&
            $item['class'] === Dispatcher::class)->count();
        return $invokeListenerCount > 1;
    }
}
