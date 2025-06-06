<?php

use App\Enums\TaskStatus;
use App\Http\Controllers\CategoryTestController;
use App\Http\Controllers\FileTestController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskCreationController;
use App\Http\Resources\SubCategoryResource;
use App\Http\Resources\TaskResource;
use App\Http\Resources\UserResource;
use App\Models\SubCategory;
use App\Models\Task;
use App\Models\User;
use CodeZero\LocalizedRoutes\Controllers\FallbackController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::localized(function () {
    Route::get('/support', function () {
        return Inertia::render('Support'); // 'Support' — имя React-компонента
    })->name('support');

    Route::get('/', [MainController::class, 'index'])->name('home');

    Route::get('/sub-category/{subCategory}', function (SubCategory $subCategory) {
        return Inertia::render('SubCategory', [
            "subCategory" => new SubCategoryResource($subCategory->load('category', 'tasks')),
        ]);
    })->name('sub-category');

    /////////////////////////////////////////////////////////////////////////////////////////////
    Route::get('/employees-page', function ()  {
        return Inertia::render('EmploeesPage');

    })->name('employees-page');
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    Route::get('/sub-preview', fn() => Inertia::render('SubCategory'));

    Route::get('/category-test', [CategoryTestController::class, 'index'])->name('category-test.index');
    Route::post('/category-test', [CategoryTestController::class, 'store'])->name('category-test.store');
    Route::put('/category-test/{category}', [CategoryTestController::class, 'update'])->name('category-test.update');
    Route::delete('/category-test/{category}', [CategoryTestController::class, 'destroy'])->name('category-test.destroy');

    Route::get('/profile/{user}/general-info', function (User $user) {
        return Inertia::render('Profile/GeneralInfo', [
            'user' => new UserResource($user->load('avatar')),
            'cities' => $user->tasks()
                ->select("address->city as city")
                ->distinct()
                ->pluck('city')
                ->toArray(),
        ]);
    })->name('profile.general-info');

    Route::get('/profile/{user}/employee-info', function (User $user) {
        return Inertia::render('Profile/EmployeeInfo', [
            'user' => new UserResource($user->load('avatar')),
        ]);
    })->name('profile.employee-info');

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');

        Route::get('/sub-category/{subCategory}/task/create', [TaskCreationController::class, 'index'])->name('sub-category.task.create.index');
        Route::post('/sub-category/{subCategory}/task/create', [TaskCreationController::class, 'store'])
            ->name('sub-category.task.create.store');

        Route::get('/file-test', [FileTestController::class, 'index'])->name('file-test.index');
        Route::post('/file-test', [FileTestController::class, 'update'])
            ->name('file-test.update');

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::get('/profile/favorite', function () {
            return Inertia::render('Profile/Favorite', [
                'employees' => UserResource::collection(
                    User::with('avatar')
                        ->limit(5)
                        ->role('employee')
                        ->get()),
            ]);
        })->name('profile.favorite');

        Route::get('/profile/in-progress', function () {
            return Inertia::render('Profile/InProgress', [
                'tasks' => TaskResource::collection(auth()->user()->tasks()
                    ->with('files')
                    ->where('status', TaskStatus::InProgress)
                    ->orWhere('status', TaskStatus::Pending)
                    ->orWhere('status', TaskStatus::PendingForExecutor)
                    ->get()),
            ]);
        })->name('profile.in-progress');

        Route::get('/profile/new-task', function () {
            return Inertia::render('Profile/NewTask', [
                'tasks' => TaskResource::collection(Task::with('files', 'subCategory', 'order.employee')
                    ->where('status', TaskStatus::Completed)
                    ->orderBy('updated_at', 'desc')
                    ->get()),
            ]);
        })->name('profile.new-task');

        Route::get('/profile/archive', function () {
            return Inertia::render('Profile/Archive', [
                'tasks' => TaskResource::collection(auth()->user()->tasks()
                    ->with('files', 'subCategory')
                    ->where('status', TaskStatus::Completed)
                    ->orWhere('status', TaskStatus::Cancelled)
                    ->get()),
            ]);
        })->name('profile.archive');

        Route::get('/task/{task}', [TaskController::class, 'index'])->name('task.index');

        Route::get('/profile/become-employee', function () {
            return Inertia::render('Profile/BecomeEmployee');
        })->name('profile.become-employee');
    });
});

require __DIR__ . '/auth.php';

Route::fallback(FallbackController::class);
