<?php

use App\Http\Controllers\CategoryTestController;
use App\Http\Controllers\FileTestController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\SubCategoryResource;
use App\Models\SubCategory;
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

    Route::get('/sub-preview', fn() => Inertia::render('SubCategory'));

    Route::get('/category-test', [CategoryTestController::class, 'index'])->name('category-test.index');
    Route::post('/category-test', [CategoryTestController::class, 'store'])->name('category-test.store');
    Route::put('/category-test/{category}', [CategoryTestController::class, 'update'])->name('category-test.update');
    Route::delete('/category-test/{category}', [CategoryTestController::class, 'destroy'])->name('category-test.destroy');

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');

        Route::get('/task-creation', function () {
            return Inertia::render('TaskCreation');
        })->name('task-creation');

        Route::get('/file-test', [FileTestController::class, 'index'])->name('file-test.index');
        Route::post('/file-test', [FileTestController::class, 'update'])
            ->name('file-test.update');

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::get('/profile/favorite', function () {
            return Inertia::render('Profile/Favorite');
        })->name('profile.favorite');

        Route::get('/profile/in-progress', function () {
            return Inertia::render('Profile/InProgress');
        })->name('profile.in-progress');

        Route::get('/profile/new-task', function () {
            return Inertia::render('Profile/NewTask');
        })->name('profile.new-task');

        Route::get('/profile/archive', function () {
            return Inertia::render('Profile/Archive');
        })->name('profile.archive');

        Route::get('/task/{id}', function ($id) {
            return Inertia::render('Task', ['id' => $id]);
        })->name('task.show');

        Route::get('/profile/general-info', function () {
            return Inertia::render('Profile/GeneralInfo');
        })->name('profile.general-info');

        Route::get('/profile/become-employee', function () {
            return Inertia::render('Profile/BecomeEmployee');
        })->name('profile.become-employee');

        Route::get('/task/{id}', function ($id) {
            return Inertia::render('Task', ['id' => $id]);
        })->name('task.show');

    });
});

require __DIR__ . '/auth.php';

Route::fallback(FallbackController::class);
