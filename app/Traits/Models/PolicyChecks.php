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
        if (static::checkIsInSeeder()) {
            return;
        }

        if (static::checkPolicy('view', static::class)) {
            static::retrieved(function ($model) {
                if ($model->checkViewPolicy && static::checkPolicy('view', $model)) {
                    Gate::authorize('view', $model);
                }
            });
        }

        static::makeEvent('creating', 'create');
        static::makeEvent('updating', 'update');
        static::makeEvent('deleting', 'delete');

        if (collect(class_uses_recursive(static::class))->contains(SoftDeletes::class)) {
            static::makeEvent('restoring', 'restore');
            static::makeEvent('forceDeleting', 'forceDelete');
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
        if (static::checkPolicy($authority, static::class)) {
            static::{$method}(function ($model) use ($authority) {
                if (static::checkPolicy($authority, $model)) {
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
