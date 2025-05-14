<?php

namespace App\Actions;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use Hash;

class AuthAction
{
    public static function store(\Illuminate\Http\Request $request)
    {

        $user = User::where('login', $request->login)->first();
        if (!$user || !Hash::check($request->password, $user->password))
            throw ValidationException::withMessages(['login' => 'Такого пользователя не существует']);

    }
}