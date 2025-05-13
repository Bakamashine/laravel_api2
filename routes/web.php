<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia("/", 'index');
Route::inertia("/admin", 'admin');