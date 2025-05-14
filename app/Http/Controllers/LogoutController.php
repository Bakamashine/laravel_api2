<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function __invoke() {
        
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
