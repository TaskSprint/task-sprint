<?php

namespace App\Casts;

use App\ValueObjects\LocaleString as LocaleStringValueObject;
use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use InvalidArgumentException;

class LocaleString implements CastsAttributes
{
    public function get($model, $key, $value, $attributes): ?LocaleStringValueObject
    {
        return new LocaleStringValueObject(isset($value) ? json_decode($value, true) : []);
    }

    public function set($model, $key, $value, $attributes)
    {
        if (!isset($value)) {
            $result = null;
        } elseif (is_string($value)) {
            $locale = new LocaleStringValueObject();
            $locale->set($value);
            $result = json_encode($locale->data);
        } elseif (is_array($value)) {
            $result = json_encode($value);
        } elseif ($value instanceof LocaleStringValueObject) {
            $result = empty($value->data) ? null : json_encode($value->data);
        } else {
            throw new InvalidArgumentException('The given value is not an LocaleString instance.');
        }

        return $result;
    }
}
