<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ImageFactory extends Factory
{
    /**
     * Фабрика картинок
     * Генерирует только не существующую ссылку
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => 1,
            'image_urls' => $this->faker->imageUrl
        ];
    }
}
