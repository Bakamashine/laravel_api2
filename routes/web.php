<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LogoutController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;

Route::inertia("/", 'index')->name("main");

Route::middleware('auth')
    ->group(function () {
        Route::inertia("/admin", 'admin')
            ->name("admin")
            ->middleware('admin');
        Route::resource("/category", CategoryController::class);
    });

Route::middleware("guest")
    ->group(function () {
        Route::get("/login", [AuthController::class, 'up'])->name('login');
        Route::get("/register", [RegisterController::class, 'up'])->name("register");
    });