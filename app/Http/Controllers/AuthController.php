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

    public function up() {
        return inertia("auth/login");
    }

}