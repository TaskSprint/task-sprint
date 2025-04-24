<?php

use App\Http\Controllers\CategoryTestController;
use App\Http\Controllers\FileTestController;
use App\Http\Controllers\ProfileController;
use CodeZero\LocalizedRoutes\Controllers\FallbackController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::localized(function () {

    Route::get('/support', function () {
        return Inertia::render('Support'); // 'Support' — имя React-компонента
    })->name('support');

    Route::get('/', fn() => Inertia::render('Main'))->name('home');

    Route::get('/category-test', [CategoryTestController::class, 'index'])->name('category-test.index');
    Route::post('/category-test', [CategoryTestController::class, 'store'])->name('category-test.store');
    Route::put('/category-test/{category}', [CategoryTestController::class, 'update'])->name('category-test.update');
    Route::delete('/category-test/{category}', [CategoryTestController::class, 'destroy'])->name('category-test.destroy');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware('auth')->group(function () {


        Route::get('/file-test', [FileTestController::class, 'index'])->name('file-test.index');
        Route::post('/file-test', [FileTestController::class, 'update'])
            ->name('file-test.update');

        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        Route::get('/profile/in-progress', function () {
            return Inertia::render('TasksInProgress');
        })->name('profile.in-progress');
    });
});

require __DIR__ . '/auth.php';

Route::fallback(FallbackController::class);
