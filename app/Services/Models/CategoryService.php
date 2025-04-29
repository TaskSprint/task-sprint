<?php

namespace App\Services\Models;

use App\Models\Category;

/**
 * @extends BaseModelService<Category>
 */
class CategoryService extends BaseModelService
{
    protected string $class = Category::class;
    protected array $attributes = [
        'color'
    ];
    protected array $searchAttributes = [
        'name',
    ];
}
