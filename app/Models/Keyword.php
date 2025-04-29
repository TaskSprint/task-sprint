<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Keyword extends Model
{
    protected $guarded = ['id'];

    public function keywordable(): MorphTo
    {
        return $this->morphTo();
    }
}
