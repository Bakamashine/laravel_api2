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

        $image = static::uploadImage($request);
        if (!is_null($image)){
            $data['image_urls'] = $image;
        }
        
        $product->update($data);
    }
}