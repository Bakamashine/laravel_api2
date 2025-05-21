<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Фабрика продуктов
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->streetName(),
            'description' => $this->faker->text(),
            'price' => $this->faker->buildingNumber(),
            'category_id' => 1,
        ];
    }
}
