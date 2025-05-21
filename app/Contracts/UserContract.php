<?php

namespace App\Contracts;
use App\Models\User;

/**
 * Интерфейс для пользователя
 * Делался, так как при желании, пожно лекго что-то поменять
 */
interface UserContract {
    public static function store(array $values): User;
}