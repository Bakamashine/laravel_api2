<?php

namespace App\Services;
use App\Models\User;

class RegisterService implements \App\Contracts\UserContract{
    public static function store(array $values): User {
        return User::create([
            "email" => $values['email'],
            "password" => bcrypt($values['password']),
            "role_id" => 2
        ]);
    }
}