<?php

namespace App\Services\Models;

use App\Models\SubCategory;

/**
 * @extends BaseModelService<SubCategory>
 */
class SubCategoryService extends BaseModelService
{
    protected string $class = SubCategory::class;
    protected array $attributes = [
        'category_id',
    ];
    protected array $searchAttributes = [
        'name',
        'keywords.name',
    ];
}
