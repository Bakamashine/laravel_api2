<?php

namespace App\Services;
use Illuminate\Database\Eloquent\Model;

class LowService {
    
    /**
     * Низкоуровневое создание записи
     * @param array $values
     * @param class-string<Model>  $class
     * @return void
     */
    public static function create(array $values, string $class) {
        return $class::create($values);
    }
}