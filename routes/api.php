<?php

use App\Http\Controllers\Api\CategoriesAPIController;
use App\Http\Controllers\Api\ProductAPIController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LogoutController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')
    ->group(function () {

        Route::controller(CategoriesAPIController::class)
            ->group(
                function () {
                    Route::get("/categories", 'show');
                    Route::get("/categories/{category}/products", 'getWithProducts');
                }
            );

        Route::controller(ProductAPIController::class)
            ->group(function () {
                Route::get("/products/{product}", 'show');
                Route::post('/products/{product}/buy', 'buy');
                Route::post('/payment-webhook', 'webhook')->middleware('abilities:temp');
            });

        Route::get("/orders", OrderController::class);
    });


Route::post("/auth", AuthController::class);
Route::post("/logout", LogoutController::class);
Route::post("/register", RegisterController::class);
