<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LogoutController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::controller(AuthController::class)
//     ->group(
//         function () {
//             Route::post("/auth", '__invoke');
//             Route::post("/logout", LogoutController::class)->name("logout");
//         }
//     );

Route::post("/auth", AuthController::class);
Route::post("/logout", LogoutController::class);
Route::post("/register", RegisterController::class);