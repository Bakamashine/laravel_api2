<?php

namespace App\Actions;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
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
    private static function uploadImage(Request $request): array
    {
        $urls = [];
        if ($request->hasFile('image_urls')) {
            foreach ($request->file('image_urls') as $file) {
                $urls[] = Storage::url($file->store('products', 'public'));
            }
        }
        return $urls;
    }


    /**
     * Создание нового продукта
     * @param Request $request
     * @return void
     */
    public static function create(StoreProductRequest $request)
    {
        /**
         * @var Category
         */
        $category = Category::find($request->category_id);

        /**
         * @var Product
         */
        $product = $category->products()->create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
        ]);

        $imageUrls = static::uploadImage($request);
        foreach ($imageUrls as $url) {
            $product->image()->create(['image_urls' => $url]);
        }
    }

    private static function DeleteOldImage(Product $product)
    {
        $images = $product->image()->get();

        foreach ($images as $image) {
            $path = substr($image->image_urls, 9);
            $result = Storage::disk('public');
            if ($result->exists($path)) {
                $result->delete($path);
            }
        }
        
        $product->image()->delete();
    }

    /**
     * Обновление продукта
     * @param Request $request
     * @return void
     */
    public static function update(UpdateProductRequest $request, Product $product)
    {
        $data = [
            'name' => $request->name,
            'description' => $request->description,
            'category_id' => $request->category_id,
            'price' => $request->price,
        ];

        $urls = static::uploadImage($request);
        if ($urls) {
            self::DeleteOldImage($product);
            foreach ($urls as $url) {
                $product->image()->create(['image_urls' => $url]);
            }
        }

        $product->update($data);
    }
}