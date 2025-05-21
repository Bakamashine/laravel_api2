<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderCollection;
use App\Models\Purchase;
use Illuminate\Http\Request;

/**
 * Управление заказами
 * (только вывод)
 */
class OrderController extends Controller
{
    public function __invoke() {
        return new OrderCollection(Purchase::all());
    }
}
