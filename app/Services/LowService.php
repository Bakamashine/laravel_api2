<?php

namespace App\Services;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;

class LowService
{

    /**
     * Низкоуровневое создание записи
     * @param array $values
     * @param class-string<Model>  $class
     * @return Model
     */
    public static function create(array $values, string $class): Model
    {
        return $class::create($values);
    }

    /**
     * Низкоуровневое создание пагинации
     * @param array $values
     * @param class-string<Model>  $class
     * @return LengthAwarePaginator
     */
    public static function getAllWithPaginate(string $class, $number = 5): LengthAwarePaginator
    {
        return $class::paginate($number);
    }
}