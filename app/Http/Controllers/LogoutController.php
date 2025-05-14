<?php

namespace App\Http\Controllers;

use App\Actions\ApiRegister\LogoutAction;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function __invoke() {
        LogoutAction::store();
    }
}
