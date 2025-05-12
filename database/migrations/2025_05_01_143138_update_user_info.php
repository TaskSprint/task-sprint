<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Propaganistas\LaravelPhone\PhoneNumber;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone')->default("")->after('email');
            $table->string('city')->default("")->after('phone');
        });

        User::all()->each(function ($user) {
            $user->update([
                'phone' => fake()->unique()->e164PhoneNumber(),
                'city' => fake()->city(),
            ]);
        });

        Schema::table('users', function (Blueprint $table) {
            $table->string('phone')->unique()->after('email')->change();
            $table->string('city')->after('phone')->change();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('phone');
            $table->dropColumn('city');
        });
    }
};
