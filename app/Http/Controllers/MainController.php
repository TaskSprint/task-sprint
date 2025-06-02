<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\TaskResource;
use App\Models\Category;
use App\Models\Task;
use Barryvdh\Debugbar\Facades\Debugbar;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index()
    {
        Debugbar::info(config('inertia.ssr.enabled'));
        return Inertia::render('Main', [
                'categories' => CategoryResource::collection(Category::with('icon')
                    ->orderByLeftPowerJoinsCount('subCategories.tasks.id', 'desc')
                    ->limit(8)
                    ->get()
                ),
                'tasks' => TaskResource::collection(Task::with('customer', 'currency', 'subCategory')
                    ->orderBy('created_at', 'desc')
                    ->limit(12)
                    ->get()
                ),
            ]
        );
    }
}
