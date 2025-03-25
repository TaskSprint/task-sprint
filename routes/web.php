<?php

use App\Http\Controllers\ProfileController;
use App\Models\Task;
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
                    'price' => '500.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'category' => ['name' => 'It'],
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
                    'category' => ['name' => 'Сантехніка'],
                    'estimated_date' => '2025-03-22',
                    'status' => 'completed',
                    'customer' => ['id' => 2, 'name' => 'Олег Сидоров']
                ],
                [
                    'id' => 3,
                    'name' => 'Що потрібно зробити3?',
                    'description' => 'Категорія',
                    'price' => '500.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'category' => ['name' => 'Електрика'],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],
                [
                    'id' => 4,
                    'name' => 'Що потрібно зробити4?',
                    'description' => 'Категорія',
                    'price' => '500.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'category' => ['name' => 'Доставка'],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],

                [
                    'id' => 5,
                    'name' => 'Що потрібно зробити5?',
                    'description' => 'Категорія',
                    'price' => '500.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'category' => ['name' => 'Сантехніка'],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],

                [
                    'id' => 6,
                    'name' => 'Що потрібно зробити6?',
                    'description' => 'Категорія',
                    'price' => '500.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'category' => ['name' => 'Доставка'],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],

                [
                    'id' => 7,
                    'name' => 'Що потрібно зробити7?',
                    'description' => 'Категорія',
                    'price' => '500.00',
                    'currency_code' => 'USD',
                    'address' => ['city' => 'Киев', 'street' => 'Грушевского', 'house' => '10'],
                    'category' => ['name' => 'Сантехніка'],
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
                    'category' => ['name' => 'Електрика'],
                    'estimated_date' => '2025-03-20',
                    'status' => 'pending',
                    'customer' => ['id' => 1, 'name' => 'Иван Петров']
                ],

            ]

        ]);
    });

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');

    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });



//    Route::get('/last-tasks', function () {
//        return Inertia::render('LastTasks', [
//            'tasks' => Task::with(['customer', 'order', 'currency'])
//                ->orderBy('created_at', 'desc')
//                ->limit(30)
//                ->get()
//        ]);
//    });





});

require __DIR__.'/auth.php';

Route::fallback(FallbackController::class);






