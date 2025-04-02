<?php

namespace App\Services\Models;

use App\Models\Category;

/**
 * @extends BaseModelService<Category>
 */
class CategoryService extends BaseModelService
{
    public function __construct()
    {
        parent::__construct(Category::class, [
            'color',
        ]);
    }
}
