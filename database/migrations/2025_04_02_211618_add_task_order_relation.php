<?php

use App\Models\Task;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('task_orders', function (Blueprint $table) {
            $taskModel = new Task();
            $table->foreign($taskModel->getForeignKey())->references($taskModel->getKeyName())->on($taskModel->getTable())->cascadeOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('task_orders', function (Blueprint $table) {
            $taskModel = new Task();
            $table->dropForeign([$taskModel->getForeignKey()]);
        });
    }
};
