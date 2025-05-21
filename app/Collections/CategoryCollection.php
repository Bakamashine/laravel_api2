<?php

namespace App\Collections;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Request;

/**
 * Коллекции для Категорий
 */
class CategoryCollection extends ResourceCollection {
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }
}