<?php

namespace App\Actions;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Category;

class ProductAction {
    
    /**
     * Создание нового продукта
     * @param Request $values
     * @return void
     */
    public static function create(Request $request) {
        if ($request->hasFile('image_urls')) {
            $file = $request->file('image_urls')->store('products', 'public')            ;
            
            /**
             * @var Category
             */
            $category = Category::find($request->category_id);
            
            $category->products()->create([
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'image_urls' => $file
            ]);
            
        }
    }
}