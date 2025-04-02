<?php

namespace App\Http\Controllers;

use App\Facades\Models\CategoryService;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Throwable;

class CategoryTestController extends Controller
{
    public function index()
    {
        return Inertia::render('CategoryTest', [
            'categories' => CategoryResource::collection(
                Category::with('icon')
                    ->orderBy('id', 'desc')
                    ->get())
                ->resolve(),
        ]);
    }

    /**
     * @throws Throwable
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            ...collect(config('localized-routes.supported_locales'))
                ->mapWithKeys(fn($locale) => [
                    "name_$locale" => 'required|string|max:255',
                ])->toArray(),
            'icon' => 'required|image|max:8192',
            'color' => 'required|string|max:255',
        ]);
        CategoryService::create($validated);
        return redirect(route('category-test.index'));
    }

    /**
     * @throws Throwable
     */
    public function update(Request $request, Category $category)
    {
        $validated = $request->validate([
            ...collect(config('localized-routes.supported_locales'))
                ->mapWithKeys(fn($locale) => [
                    "name_$locale" => 'required|string|max:255',
                ])->toArray(),
            'icon' => 'nullable|image|max:8192',
            'color' => 'required|string|max:255',
        ]);
        if (!$validated['icon']) {
            unset($validated['icon']);
        }
        CategoryService::update($category, $validated);
        return redirect(route('category-test.index'));
    }

    /**
     * @throws Throwable
     */
    public function destroy(Category $category)
    {
        CategoryService::delete($category);
        return redirect(route('category-test.index'));
    }
}
