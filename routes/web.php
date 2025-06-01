<?php

use App\Http\Controllers\SchedServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[SchedServiceController::class,'index']);
Route::resource('posts',SchedServiceController::class)->except('index');