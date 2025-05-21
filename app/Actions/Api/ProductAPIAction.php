<?php

namespace App\Actions\Api;

use App\Models\Product;

class ProductAPIAction
{
    /**
     * Работает с webhook
     * После добавления записи, удаляет временный токен
     * @param int $id_product (order_id)
     * @param string $status Статус заказа
     * @return \Illuminate\Contracts\Routing\ResponseFactory|\Illuminate\Http\Response
     */
    public static function create_webhook(int $id_product, string $status)
    {
        /**
         * @var Product
         */
        $product = Product::find($id_product);
        $product->purchase()->create([
            'status' => $status
        ]);

        auth('sanctum')->user()->currentAccessToken()->delete();
        return response(status: 204);
    }
}