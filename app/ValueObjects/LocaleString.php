<?php

namespace App\ValueObjects;

use ArrayAccess;
use Illuminate\Support\Arr;

class LocaleString implements ArrayAccess
{
    public ?string $current {
        get {
            return $this->get();
        }
    }

    public function __construct(public array $data = [])
    {
    }

    public function __toString(): string
    {
        return $this->get() ?? '';
    }

    public function get($locale = null): ?string
    {
        $current = $locale ?? app()->getLocale();

        return $this->data[$current] ?? $this->getFallback();
    }

    public function getFallback(): ?string
    {
        $fallback = config('localized-routes.fallback_locale');

        return $this->data[$fallback] ?? Arr::first($this->data);
    }

    public function offsetSet($offset, $value): void
    {
        $this->set($value, $offset);
    }

    public function set($value, $locale = null): void
    {
        $currentLocale = $locale ?? app()->getLocale();
        $supportedLocales = config('localized-routes.supported_locales');
        if (!in_array($currentLocale, $supportedLocales)) {
            return;
        }

        $this->data[$currentLocale] = $value;
    }

    public function offsetExists($offset): bool
    {
        return isset($this->data[$offset]);
    }

    public function offsetUnset($offset): void
    {
        unset($this->data[$offset]);
    }

    public function offsetGet($offset): ?string
    {
        return $this->get($offset);
    }
}
