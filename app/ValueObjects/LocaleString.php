<?php

namespace App\ValueObjects;

use ArrayAccess;
use Illuminate\Support\Arr;
use Livewire\Wireable;

class LocaleString implements ArrayAccess, Wireable
{
    public ?string $current {
        get {
            return $this->get();
        }
    }

    public function __construct(public array $data = [])
    {
    }

    public static function fromLivewire($value): static
    {
        return new static($value);
    }

    public function __toString(): string
    {
        return $this->get() ?? '';
    }

    public function get(?string $locale = null): ?string
    {
        $current = $locale ?? app()->getLocale();

        return $this->data[$current] ?? $this->getFallback();
    }

    public function getFallback(): ?string
    {
        $fallback = config('localized-routes.fallback_locale');

        return $this->data[$fallback] ?? Arr::first($this->data);
    }

    public function __get(string $name)
    {
        return $this->get($name);
    }

    public function __set(string $name, string $value)
    {
        $this->set($value, $name);
    }

    public function set(string $value, ?string $locale = null): void
    {
        $currentLocale = $locale ?? app()->getLocale();
        $supportedLocales = config('localized-routes.supported_locales');
        if (!in_array($currentLocale, $supportedLocales)) {
            return;
        }

        $this->data[$currentLocale] = $value;
    }

    public function offsetSet($offset, $value): void
    {
        $this->set($value, $offset);
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

    public function toLivewire(): array
    {
        return $this->data;
    }
}
