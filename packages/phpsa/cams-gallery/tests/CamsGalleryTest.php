<?php

namespace Phpsa\CamsGallery\Tests;

use Phpsa\CamsGallery\Facades\CamsGallery;
use Phpsa\CamsGallery\ServiceProvider;
use Orchestra\Testbench\TestCase;

class CamsGalleryTest extends TestCase
{
    protected function getPackageProviders($app)
    {
        return [ServiceProvider::class];
    }

    protected function getPackageAliases($app)
    {
        return [
            'cams-gallery' => CamsGallery::class,
        ];
    }

    public function testExample()
    {
        $this->assertEquals(1, 1);
    }
}
