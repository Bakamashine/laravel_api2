<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
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
                    Route::resource("/product", ProductController::class);

                    Route::controller(ProductController::class)
                        ->name('product')
                        ->group(function () {

                            Route::get("/product", 'index')->name('.index');
                            Route::get("/product/create", 'create')->name('.create');
                            Route::get("/product/{product}", 'show')->name('.show');
                            Route::get('/product/{product}/edit', 'edit')->name('.edit');
                            Route::post("/product", 'store')->name('.store');
                            Route::post("/product/{product}", 'update')->name(".update");
                            Route::delete('/product/{product}', 'delete')->name('.destroy');

                        });
                }
            );
    });

Route::middleware("guest")
    ->group(function () {
        Route::get("/login", [AuthController::class, 'up'])->name('login');
        Route::get("/register", [RegisterController::class, 'up'])->name("register");
    });