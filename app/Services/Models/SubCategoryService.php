<?php

namespace App\Services\Models;

use App\Models\SubCategory;

/**
 * @extends BaseModelService<SubCategory>
 */
class SubCategoryService extends BaseModelService
{
    public function __construct()
    {
        parent::__construct(SubCategory::class, [
            'category_id',
        ]);
    }
}
