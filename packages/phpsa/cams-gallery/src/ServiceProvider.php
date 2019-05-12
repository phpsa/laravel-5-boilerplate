<?php

namespace Phpsa\CamsGallery;

class ServiceProvider extends \Illuminate\Support\ServiceProvider
{
    const CONFIG_PATH = __DIR__ . '/../config/cams-gallery.php';

    public function boot()
    {
        $this->publishes([
            self::CONFIG_PATH => config_path('cams-gallery.php'),
        ], 'config');
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
    }
}
