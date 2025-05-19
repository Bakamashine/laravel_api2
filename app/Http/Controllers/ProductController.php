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
    private string $redact_product;

    public function __construct()
    {
        $this->redact_product = $this->path_admin_comp_forms . "/Products/EditProduct";
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia(
            $this->path_product,
            [
                'category' => Category::all(),
                'products' => Product::with('category')->paginate(5)
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
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $request->validated();
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
     * Show the form for editing the specified resource.
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
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        ProductAction::update($request, $product);
        return redirect()->route('product.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
