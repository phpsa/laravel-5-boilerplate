<?php

namespace Phpsa\CamsGallery;

use Illuminate\Support\Facades\Route;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    const CONFIG_PATH = __DIR__ . '/../config/cams-gallery.php';

    public function boot()
    {
        $this->publishes([
            self::CONFIG_PATH => config_path('cams-gallery.php'),
		], 'config');

		Route::middleware('web')
			->group(__DIR__.'/routes.php');

				//Translations
		$this->loadTranslationsFrom(__DIR__.'/translations', 'phpsa-cams-gallery');

		$this->publishes([
			__DIR__.'/translations' => resource_path('lang/vendor/phpsa-cams-gallery'),
		]);
    }

    public function register()
    {
        $this->mergeConfigFrom(
            self::CONFIG_PATH,
            'cams-gallery'
        );

        $this->app->bind('cams-gallery', function () {
            return new CamsGallery();
		});

		$this->loadViewsFrom(__DIR__.'/views', 'phpsa-cams-gallery');
    }
}
