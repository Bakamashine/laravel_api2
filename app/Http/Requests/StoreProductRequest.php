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

        // return array_merge(
        //     (new UpdateCategoryRequest())->rules(),
        //     [
        //         'price' => [
        //             'required', 
        //             'integer'
        //         ],
        //         'image_urls' => [
        //             'required', 
        //             'image', 
        //             'mimetypes:image/jpeg,image/png'
        //         ],
        //     ]
        // );

        return [
            'name' => [
                'required',
                'string',
                'max:20',
                'regex:/^[a-яё]+(?:[ -][a-яё]+)*$/i'
            ],
            'description' => [
                'sometimes',
                'string',
                'max:50',
                'regex:/^[a-яё]+(?:[ -][a-яё]+)*$/i'
            ],
            'price' => [
                'required',
                'integer',
                'regex:/^\d+\.\d{2}$/|gt:10'
            ],
            'image_urls' => [
                'required',
                'image',
                'min:1',
                'max:5',
                'mimetypes:image/jpeg,image/png'
            ],
        ];
    }
}
