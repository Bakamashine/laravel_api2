<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

/**
 * Основной контроллер Администратора
 */
class AdminController extends Controller
{
    use \App\AdminTrait;

    public function index() {
        return inertia($this->path_admin . "/index");
    }
}
