<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    use \App\AdminTrait;

    public function index() {
        return inertia($this->path_admin . "/index");
    }
}
