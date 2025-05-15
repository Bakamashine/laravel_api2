<?php

namespace App\Actions\ApiRegister;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use Hash;

class AuthAction
{
    
    /**
     * Авторизация через API
     * @param \Illuminate\Http\Request $request
     * @return User
     */
    public static function store(\Illuminate\Http\Request $request): User
    {

        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password))
            throw ValidationException::withMessages(['email' => 'Такого пользователя не существует']);
        return $user;
    }
}