<?php

namespace App\Actions\ApiRegister;

class LogoutAction
{
    public static function store()
    {
        auth('sanctum')
            ->user()
            ->currentAccessToken()
            ->delete;
    }
}