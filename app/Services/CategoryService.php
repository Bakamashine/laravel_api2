<?php

namespace App\Services;

use App\Models\Category;

class CategoryService {

    /**
     * Создание новой категории
     * @param array $values
     * @return Category
     */
    public static function create(array $values): Category {
        return Category::create([
            "name" => $values['name'],
            'description' => $values['description']
        ]);
    }
    
    /**
     * Обновление категории
     * @param array $values
     * @param \App\Models\Category $category
     * @return void
     */
    public static function update(array $values, Category $category) {
        $category->update([
            "name" => $values['name'],
            'description' => $values['description']
        ]);
    }
    
    /**
     * Вывод всех категорий
     * @return \Illuminate\Database\Eloquent\Collection<int, Category>
     */
    public static function getAll() {
        return Category::all();
    }
    
    /**
     * Вывод всех категорий с пагинацией
     * @param int $number длина пагинации
     * @return \Illuminate\Pagination\LengthAwarePaginator
     */
    public static function getAllWithPaginate(int $number = 5) {
        return Category::paginate($number);
    }
}