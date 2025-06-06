<?php

namespace App\Providers;

use Barryvdh\Debugbar\Facades\Debugbar;
use BezhanSalleh\FilamentLanguageSwitch\LanguageSwitch;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $loader = AliasLoader::getInstance();
        $loader->alias('Debugbar', Debugbar::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        LanguageSwitch::configureUsing(function (LanguageSwitch $switch) {
            $switch
                ->locales(config('localized-routes.supported_locales'));
        });

        JsonResource::withoutWrapping();
    }
}
