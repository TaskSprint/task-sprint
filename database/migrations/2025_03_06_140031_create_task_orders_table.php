<?php

use App\Enums\TaskOrderStatus;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('task_orders', function (Blueprint $table) {
            $table->foreignIdFor(Task::class);
            $table->enum('status', array_column(TaskOrderStatus::cases(), 'value'))
                ->default(TaskOrderStatus::Pending->value);
            $table->foreignIdFor(User::class, 'employee_id');
            $table->timestamps();

            $table->primary(new Task()->getForeignKey());
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('task_orders');
    }
};
