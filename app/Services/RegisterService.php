<?php

namespace App\Services;
use App\Models\User;

class RegisterService implements \App\Contracts\UserContract{
    
    /**
     * Создание нового пользователя
     * @param array $values
     * @return User
     */
    public static function store(array $values): User {
        return User::create([
            "email" => $values['email'],
            "password" => bcrypt($values['password']),
            "role_id" => 2
        ]);
    }
}