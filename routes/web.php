<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;

Route::inertia("/", 'index')->name("main");
Route::inertia("/admin", 'admin')->name("admin");

Route::post("/register", RegisterController::class);
Route::controller(AuthController::class)
->group(
    function () {
        Route::post("/auth", '__invoke');
        Route::get("/login", 'up')->name("login");
    }
);