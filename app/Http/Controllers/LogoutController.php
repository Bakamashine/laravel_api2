<?php

namespace App\Http\Controllers;

use App\Actions\ApiRegister\LogoutAction;
use Illuminate\Http\Request;

/**
 * Деавторизация пользователя
 */
class LogoutController extends Controller
{
    public function __invoke() {
        LogoutAction::store();
    }
}
