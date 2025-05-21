<?php

namespace App\Http\Controllers;

use App\Actions\ProductAction;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends AdminController
{
    /**
     * Итоговый путь для EditProduct
     * @var string
     */
    private string $redact_product;

    public function __construct()
    {
        $this->redact_product = $this->path_admin_comp_forms . "/Products/EditProduct";
    }

    /**
     * Открывает основную страницу с продуктами
     */
    public function index()
    {
        return inertia(
            $this->path_product,
            [
                'category' => Category::all(),
                'products' => Product::with('category')
                    ->with("image")
                    ->paginate(5)
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Добавление нового продукта
     * @param StoreProductRequest $request
     */
    public function store(StoreProductRequest $request)
    {
        ProductAction::create($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Открытие страницы с редактирование товара
     * @param Product $product
     */
    public function edit(Product $product)
    {
        return inertia(
            $this->redact_product,
            [
                'category' => Category::all(),
                'product' => $product
            ]
        );
    }

    /**
     * Обновление продукта
     * !FIXME: Не работает
     * @param UpdateProductRequest $request
     * @param Product $product
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        ProductAction::update($request, $product);
        return redirect()->route('product.index');
    }

    /**
     * Удаление товара
     * @param Product $product
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
