<?php

namespace App\Services;

use App\Models\Category;

class CategoryService {

    public static function create(array $values): Category {
        return Category::create($values);
    }
    
    public static function getAll() {
        return Category::all();
    }
}