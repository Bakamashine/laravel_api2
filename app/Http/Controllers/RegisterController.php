<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use App\Http\Requests\RegisterRequest;
use App\Services\RegisterService;

class RegisterController extends Controller
{
    
    /**
     * Регистрация посредством API
     * @param RegisterRequest $request
     * @return mixed|\Illuminate\Http\JsonResponse
     */
    public function __invoke(RegisterRequest $request): JsonResponse
    {
        $request->validated();
        
        RegisterService::store($request->all());

        return response()->json([
            "success" => true            
        ], 201);
    }
    
    public function up() {
        return inertia("auth/register");
    }
}
