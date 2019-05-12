<?php

namespace Phpsa\CamsGallery\Facades;

use Illuminate\Support\Facades\Facade;

class CamsGallery extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'cams-gallery';
    }
}
