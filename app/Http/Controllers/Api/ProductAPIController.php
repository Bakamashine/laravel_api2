<?php

namespace App\Http\Controllers\Api;

use App\Actions\Api\ProductAPIAction;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductAPIController extends Controller
{
    public function show(Product $product) {
        return new ProductResource($product);
    }
    
    public function buy(Product $product) {
        $id = $product->id;
        $token = auth('sanctum')->user()->createToken('temporary', ['temp'])->plainTextToken;
        $token = str_replace('|', '%', $token);
        return response()->json([
            "pay_url" => "http://localhost:9001/index.php?id=$id&token=$token"
        ]);
    }
    
    public function webhook(Request $request) {
        $order_id = $request->id;
        $status = intval($request->status) ? "success" : "failed";
        auth('sanctum')->user()->currentAccessToken()->delete;
        return ProductAPIAction::create_webhook($order_id, $status);
    }
}
