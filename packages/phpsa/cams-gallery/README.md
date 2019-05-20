# Gallery package for CAMS

[![Build Status](https://travis-ci.org/phpsa/cams-gallery.svg?branch=master)](https://travis-ci.org/phpsa/cams-gallery)
[![styleci](https://styleci.io/repos/CHANGEME/shield)](https://styleci.io/repos/CHANGEME)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/phpsa/cams-gallery/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/phpsa/cams-gallery/?branch=master)
[![SensioLabsInsight](https://insight.sensiolabs.com/projects/CHANGEME/mini.png)](https://insight.sensiolabs.com/projects/CHANGEME)
[![Coverage Status](https://coveralls.io/repos/github/phpsa/cams-gallery/badge.svg?branch=master)](https://coveralls.io/github/phpsa/cams-gallery?branch=master)

[![Packagist](https://img.shields.io/packagist/v/phpsa/cams-gallery.svg)](https://packagist.org/packages/phpsa/cams-gallery)
[![Packagist](https://poser.pugx.org/phpsa/cams-gallery/d/total.svg)](https://packagist.org/packages/phpsa/cams-gallery)
[![Packagist](https://img.shields.io/packagist/l/phpsa/cams-gallery.svg)](https://packagist.org/packages/phpsa/cams-gallery)

Package description: CHANGE ME

## Installation

Requires CAMS (Content Assets Managment System) package from [phsa/datastore](https://github.com/phpsa/laravel-5-cams)

Install via composer
```bash
composer require phpsa/cams-gallery
```

### Register Service Provider

**Note! This and next step are optional if you use laravel>=5.5 with package
auto discovery feature.**

Add service provider to `config/app.php` in `providers` section
```php
Phpsa\CamsGallery\ServiceProvider::class,
```

### Register Facade

Register package facade in `config/app.php` in `aliases` section
```php
Phpsa\CamsGallery\Facades\CamsGallery::class,
```

### Edit Datastore Configuration File

Edit the 'configs/datastore.php' config file and add the following to the assets config:
```php
		Phpsa\CamsGallery\Ams\Gallery\CategoryAsset::class,
		Phpsa\CamsGallery\Ams\Gallery\PageAsset::class
```

## Usage

Gallery admin is now available in the admin panel under the ams management menu
Views can be edited by overwriting the view files by placing them in ...

## Security

If you discover any security related issues, please email vxdhost@gmail.com
instead of using the issue tracker.

## Credits

- [Craig Smith](https://github.com/phpsa/cams-gallery)
- [All contributors](https://github.com/phpsa/cams-gallery/graphs/contributors)

This package is bootstrapped with the help of
[melihovv/laravel-package-generator](https://github.com/melihovv/laravel-package-generator).
