<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Services\RegisterService;

class RegisterController extends Controller
{
    
    use \App\ApiHelper;
    /**
     * Регистрация посредством API
     * @param RegisterRequest $request
     * @return mixed|\Illuminate\Http\JsonResponse
     */
    public function __invoke(RegisterRequest $request)
    {
        $request->validated();
        
        RegisterService::store($request->all());

        // try {
        //     return $this->isSuccess([
        //         'user' => $user,
        //         'token' => $user->createToken("user_token", json_decode($user->role->abilities))->plainTextToken
        //     ]);
        // } catch (Exception $exception) {
        //     $user->delete();
        //     return $this->Error($exception->getMessage());
        // }
    }
}
