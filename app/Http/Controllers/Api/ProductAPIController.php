<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductAPIController extends Controller
{
    public function show(Product $product) {
        return new ProductResource($product);
    }
}
