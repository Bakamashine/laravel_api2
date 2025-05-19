<?php

namespace App\Http\Controllers\Api;

use App\Collections\CategoryCollection;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesAPIController extends Controller
{
    public function show() {
        return new CategoryCollection(Category::all());
    }
}
