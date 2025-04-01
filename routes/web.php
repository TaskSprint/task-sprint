<?php

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

            'categories' => [
                [
                    'id' => 1,
                    'name' => 'Програмування',
                    'color' => '#FF5733',
                    'updated_at' => '2025-03-31',
                    'created_at' => '2025-03-01',
                ],
                [
                    'id' => 2,
                    'name' => 'Дизайн',
                    'color' => '#33FF57',
                    'updated_at' => '2025-03-31',
                    'created_at' => '2025-03-02',
                ],
                [
                    'id' => 3,
                    'name' => 'Ремонт техніки',
                    'color' => '#3357FF',
                    'updated_at' => '2025-03-31',
                    'created_at' => '2025-03-03',
                ],
                [
                    'id' => 4,
                    'name' => 'Транспортування',
                    'color' => '#57FF33',
                    'updated_at' => '2025-03-31',
                    'created_at' => '2025-03-04',
                ],
            ]
        ]);

    })->name('home');

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });
});

require __DIR__ . '/auth.php';

Route::fallback(FallbackController::class);
