<?php
/** @noinspection PhpUndefinedClassInspection */

/** @noinspection PhpUndefinedNamespaceInspection */

namespace App\Http\Middleware;

use App\Facades\Models\CategoryService;
use App\Facades\Models\SubCategoryService;
use App\Facades\Models\TaskService;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\SubCategoryResource;
use App\Http\Resources\TaskResource;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $query = $request->query("q");
        $categories = null;
        $subCategories = null;
        $tasks = null;
        if (is_string($query) && !str($query)->isEmpty()) {
            $categories = CategoryResource::collection(
                CategoryService::search($query)
                    ->limit(10)
                    ->get()
            );
            $subCategories = SubCategoryResource::collection(
                SubCategoryService::search($query)
                    ->with(["category", "keywords"])
                    ->limit(10)
                    ->get()
            );
            $tasks = TaskResource::collection(
                TaskService::search($query)
                    ->with(["subCategory", "subCategory.keywords", "subCategory.category"])
                    ->limit(10)
                    ->get()
            );
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => auth()->check() ? new UserResource(auth()->user()->load("avatar")) : null,
            ],
            'search' => is_string($query)
                ? compact("categories", "subCategories", "tasks", "query")
                : null,
            'ziggy' => fn() => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
            'locale' => fn() => [
                'current' => app()->getLocale(),
                'available' => config('localized-routes.supported_locales'),
            ],
        ];
    }
}
