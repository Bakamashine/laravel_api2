<?php

namespace App\Http\Controllers\Api;

use App\Collections\CategoryCollection;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryWithProductsResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoriesAPIController extends Controller
{
    public function show() {
        return new CategoryCollection(Category::all());
    }
    
    public function getWithProducts(Category $category) {
        return new CategoryWithProductsResource($category);
    }
}
