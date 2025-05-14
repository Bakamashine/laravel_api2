<?php

namespace App\Http\Controllers;

use App\Actions\AuthAction;
use Illuminate\Http\Request;

class AuthController extends Controller
{

    /**
     * Авторизация посредством API
     * @param \Illuminate\Http\Request $request
     * @return mixed|\Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $user = AuthAction::store($request);
        return response()->json([
            "token" => $user->createToken("user_token")->plainTextToken
        ]);

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