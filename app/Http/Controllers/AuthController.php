<?php

namespace App\Http\Controllers;

use App\Actions\AuthAction;
use Hash;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{

    /**
     * Авторизация посредством API
     * @param \Illuminate\Http\Request $request
     * @return mixed|\Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        // try {
        //     $user = User::where('login', $request->login)->first();
        //     if (!$user || !Hash::check($request->password, $user->password)) {
        //         throw ValidationException::withMessages(['login' => 'Такого пользователя не существует']);
        //     } else {
        //         return $this->isSuccess(['user' => $user, 'token' => $user->createToken("user_token", json_decode($user->role->abilities))->plainTextToken]);
        //     }
        // } catch (ValidationException $e) {
        //     return $this->ValidateError($e->validator->errors()->all());
        // }
        
        try {
            AuthAction::store($request);
            return $this->isSuccess(['user' => $user, 'token' => $user->createToken("user_token", json_decode($user->role->abilities))->plainTextToken]);
        }

    }

    public function logout()
    {
        try {
            $user = auth('sanctum')->user();
            if ($user) {
                $user->currentAccessToken()->delete();
            } else {
                return $this->codeAndMessage("Вы не авторизированы");
            }
        } catch (\Exception $e) {
            return $this->codeAndMessage($e->getMessage(), 500);
        }
    }

}