<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

// class ProductResource extends ResourceCollection
class ProductResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'category_name' => $this->category->name,
            'description' => $this->description,
            'price' => $this->price,
            'image_urls' => $this->image_urls,
            'default_image' => $this->default_image | null
        ];
    }
}
