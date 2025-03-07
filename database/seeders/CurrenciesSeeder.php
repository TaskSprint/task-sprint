<?php

namespace Database\Seeders;

use App\Models\Currency;
use Illuminate\Database\Seeder;

class CurrenciesSeeder extends Seeder
{
    public function run(): void
    {
        $currencies = [
            'USD' => [
                'en' => 'United States Dollar',
                'ru' => 'Доллар США',
                'uk' => 'Долар США',
            ],
            'EUR' => [
                'en' => 'Euro',
                'ru' => 'Евро',
                'uk' => 'Євро',
            ],
            'UAH' => [
                'en' => 'Ukrainian Hryvnia',
                'ru' => 'Украинская гривна',
                'uk' => 'Українська гривня',
            ],
            'RUB' => [
                'en' => 'Russian Ruble',
                'ru' => 'Российский рубль',
                'uk' => 'Російський рубль',
            ],
        ];

        foreach ($currencies as $code => $name) {
            Currency::firstOrCreate(
                ['code' => $code],
                ['name' => $name]
            );
        }
    }
}
