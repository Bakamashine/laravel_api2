import React from 'react'
import Layout_Admin from "./layout_admin";
import { CategoryOutput } from "../interfaces";
import OutputCategory from './components/output/OutputCategory';
import CreateCategory from './components/forms/Category/CreateCategory';


function CategoryPage({ category }: { category: CategoryOutput }) {
    return (
        <Layout_Admin>
            <CreateCategory />
            <OutputCategory category={category} />
        </Layout_Admin>
    );
}

export default CategoryPage;
