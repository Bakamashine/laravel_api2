<?php

namespace App\Actions;

use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use App\Models\Category;
use Storage;

class ProductAction
{

    /**
     * Загрузка изображения в public/products
     * @param \Illuminate\Http\Request $request
     * @throws \Exception
     * @return string
     */
    private static function uploadImage(Request $request)
    {
        if ($request->hasFile('image_urls')) {
            $file = $request->file('image_urls')->store('products', 'public');
            return Storage::url($file);
        } else
            throw new Exception("Image not found");
    }

    /**
     * Создание нового продукта
     * @param Request $request
     * @return void
     */
    public static function create(Request $request)
    {
        /**
         * @var Category
         */
        $category = Category::find($request->category_id);

        $category->products()->create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'image_urls' => static::uploadImage($request)
        ]);
    }

    /**
     * Обновление продукта
     * @param Request $request
     * @return void
     */
    public static function update(Request $request, Product $product)
    {
        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'image_urls' => static::uploadImage($request)
        ]);
    }
}