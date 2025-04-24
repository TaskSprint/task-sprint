<?php

use App\Http\Controllers\CategoryTestController;
use App\Http\Controllers\FileTestController;
use App\Http\Controllers\ProfileController;
use CodeZero\LocalizedRoutes\Controllers\FallbackController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::localized(function () {
    

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);

    })->name('home');

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
    });
});

require __DIR__ . '/auth.php';

Route::fallback(FallbackController::class);
