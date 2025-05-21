<?php

namespace App\Actions\Api;

use App\Models\Product;

class ProductAPIAction {
    public static function create_webhook(int $id_product, string $status) {
        /**
         * @var Product
         */
        $product = Product::find($id_product);
        $product->purchase()->create([
            'status' => $status
        ]);
        
        return response(status:204);
    }
}