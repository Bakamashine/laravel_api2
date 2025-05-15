<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;

Route::inertia("/", 'index')->name("main");

Route::middleware('auth')
    ->group(function () {

        Route::middleware('admin')
            ->group(
                function () {
                    Route::inertia("/admin", 'admin')
                        ->name("admin");

                    Route::resource("/category", CategoryController::class);
                }
            );
    });

Route::middleware("guest")
    ->group(function () {
        Route::get("/login", [AuthController::class, 'up'])->name('login');
        Route::get("/register", [RegisterController::class, 'up'])->name("register");
    });