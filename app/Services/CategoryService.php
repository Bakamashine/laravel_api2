<?php

namespace App\Services;

use App\Models\Category;

class CategoryService {

    public static function create(array $values): Category {
        return Category::create([
            "name" => $values['name'],
            'description' => $values['description']
        ]);
    }
    
    public static function update(array $values, Category $category) {
        $category->update([
            "name" => $values['name'],
            'description' => $values['description']
        ]);
    }
    
    public static function getAll() {
        return Category::all();
    }
    
    public static function getAllWithPaginate(int $number = 5) {
        return Category::paginate($number);
    }
}