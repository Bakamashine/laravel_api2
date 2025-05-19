<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Services\CategoryService;
use App\Services\LowService;
use Request;

class CategoryController extends AdminController
{
    private string $redact_category;

    public function __construct() {
        $this->redact_category = $this->path_admin_comp_forms . "/Category/EditCategory";
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia(
            $this->path_category,
            ['category' => CategoryService::getAllWithPaginate()]
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
    public function store(StoreCategoryRequest $request)
    {
        $request->validated();
        CategoryService::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        return inertia($this->redact_category, ['category' => $category]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $request->validated();
        $category->update($request->all());
        return redirect()->route("category.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
    }
}
