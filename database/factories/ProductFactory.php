<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->streetName(),
            'description' => $this->faker->text(),
            'price' => $this->faker->buildingNumber(),
            'image_urls' => $this->faker->imageUrl(),
            'category_id' => 1,
        ];
    }
}
