<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\AdminController;



Route::inertia("/", 'index')->name("main");

Route::middleware('auth')
    ->group(function () {

        Route::middleware('admin')
            ->group(
                function () {
                    Route::get("/admin", [AdminController::class, 'index'])
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