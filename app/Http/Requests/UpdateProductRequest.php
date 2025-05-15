<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $category_rule = (new UpdateCategoryRequest())->rules();
        return array_merge(
            $category_rule,
            [
                'price' => ['integer', 'required'],
                'image_urls' => ['image', 'mimetypes:image/jpeg,image/png'],
            ]
        );
    }
}
