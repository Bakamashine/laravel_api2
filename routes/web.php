<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\RegisterController;

Route::inertia("/", 'index')->name("main");
Route::inertia("/admin", 'admin')->name("admin");

Route::post("/register", RegisterController::class);
Route::post("/auth", AuthController::class);