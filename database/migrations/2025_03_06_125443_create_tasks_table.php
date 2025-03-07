<?php

use App\Enums\TaskStatus;
use App\Models\Currency;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');
            $table->decimal('price');
            $table->jsonb('address');
            $table->date('estimated_date');
            $table->enum('status', array_column(TaskStatus::cases(), 'value'))
                ->default(TaskStatus::Pending->value);
            $table->foreignIdFor(User::class, 'customer_id')->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Currency::class, 'currency_code')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
