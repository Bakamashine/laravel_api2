<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegisterController;

Route::inertia("/", 'index');
Route::inertia("/admin", 'admin');

Route::post("/register", [RegisterController::class, '__invoke']);