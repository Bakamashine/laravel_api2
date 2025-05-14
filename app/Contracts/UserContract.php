<?php

namespace App\Contracts;
use App\Models\User;

interface UserContract {
    public static function store(array $values): User;
}