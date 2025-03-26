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

            'lastTasks' => [
                [
                    'id' => 1,
                    'name' => 'Що потрібно зробити1?',
                    'description' => 'Категорія',
                    'price' => '312.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'subCategory' => ['category' => ['name' => 'It']],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],
                [
                    'id' => 2,
                    'name' => 'Фикс багов в API2',
                    'description' => 'Исправить ошибки и оптимизировать код',
                    'price' => '1500.00',
                    'currency_code' => 'EUR',
                    'address' => ['city' => 'Львов', 'street' => 'Шевченко', 'house' => '22'],
                    'subCategory' => ['category' => ['name' => 'Сантехніка']],
                    'estimated_date' => '2025-03-22',
                    'status' => 'completed',
                    'customer' => ['id' => 2, 'name' => 'Олег Сидоров']
                ],
                [
                    'id' => 3,
                    'name' => 'Що потрібно зробити3?',
                    'description' => 'Категорія',
                    'price' => '5000.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'estimated_date' => '2025-03-20',
                    'subCategory' => ['category' => ['name' => 'Електрика']],
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],
                [
                    'id' => 4,
                    'name' => 'Що потрібно зробити4?',
                    'description' => 'Категорія',
                    'price' => '30000.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'subCategory' => ['category' => ['name' => 'Доставка']],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],

                [
                    'id' => 5,
                    'name' => 'Що потрібно зробити5?',
                    'description' => 'Категорія',
                    'price' => '70000.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'subCategory' => ['category' => ['name' => 'Сантехніка']],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],

                [
                    'id' => 6,
                    'name' => 'Що потрібно зробити6?',
                    'description' => 'Категорія',
                    'price' => '600.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'subCategory' => ['category' => ['name' => 'Доставка']],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],

                [
                    'id' => 7,
                    'name' => 'Що потрібно зробити7?',
                    'description' => 'Категорія',
                    'price' => '699.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'subCategory' => ['category' => ['name' => 'Доставка']],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],

                [
                    'id' => 8,
                    'name' => 'Що потрібно зробити8?',
                    'description' => 'Категорія',
                    'price' => '500.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'subCategory' => ['category' => ['name' => 'Електрика']],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
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






