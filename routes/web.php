<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegisterController;

Route::inertia("/", 'index');
Route::inertia("/admin", 'admin');

Route::post("/register", RegisterController::class);
Route::post("/auth", AuthController::class);