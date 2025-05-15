<?php

namespace App\Actions\ApiRegister;

class LogoutAction
{
    /**
     * Удаление токена (выход) через API
     * @return void
     */
    public static function store()
    {
        auth('sanctum')
            ->user()
            ->currentAccessToken()
            ->delete;
    }
}