<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class CategoryController extends AdminController
{
    private string $redact_category;

    public function __construct() {
        $this->redact_category = $this->path_admin_comp_forms . "/Category/EditCategory";
    }

    /**
     * Вывод основной страницы с категориями 
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
     * Добавление новой категории
     * @param StoreCategoryRequest $request
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
     * Открытие страницы для обновления
     * @param Category $category
     */
    public function edit(Category $category)
    {
        return inertia($this->redact_category, ['category' => $category]);
    }

    /**
     * Обновление категории
     * @param UpdateCategoryRequest $request
     * @param Category $category
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        CategoryService::update($request->all(), $category);
        return redirect()->route("category.index");
    }

    /**
     * Удаление категории
     * @param Category $category
     */
    public function destroy(Category $category)
    {
        $category->delete();
    }
}
