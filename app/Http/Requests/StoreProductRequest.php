<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
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

        return [
            'name' => [
                'required',
                'string',
                'max:20',
                'regex:/^[a-яё]+(?:[ -][a-яё]+)*$/i'
            ],
            'description' => [
                'nullable',
                'string',
                'max:50',
                'regex:/^[a-яё]+(?:[ -][a-яё]+)*$/i'
            ],
            'price' => [
                'required',
                'integer',
                // 'regex:/^\d+\.\d{2}$/'
            ],
            'image_urls' => [
                "required",
                'array',
                'min:1',
                'max:5',
            ],
            'image_urls.*' => [
                'image',
                'mimetypes:image/jpeg,image/png,image/jpg'
            ]

        ];
    }
}
