<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        User::firstOrCreate(
            [
                'email' => config('user.admin.email'),
            ],
            [
                'name' => config('user.admin.name'),
                'password' => bcrypt(config('user.admin.password')),
            ]
        )->assignRole('admin')->markEmailAsVerified();
    }
}
