<?php

use App\Http\Controllers\Backend\DashboardController;
use  Phpsa\Datastore\Http\Controllers\PageController;
use  Phpsa\Datastore\Http\Controllers\Admin\Controller as AdminController;


// All route names are prefixed with 'admin.'.
Route::redirect('/', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');





// Route::get('datastore_tests', [PageController::class, 'tests'])->name('dstests');


// Route::group(['namespace' => 'Backend', 'as' => 'ams.', 'middleware' => 'admin'], function () {

// 	Route::get('ams/{asset}', [AdminController::class, 'list'])->name('content.list');

// });