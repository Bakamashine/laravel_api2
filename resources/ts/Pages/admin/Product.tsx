import React from "react";
import Layout_Admin from "./layout_admin";
import CreateProduct from "../components/forms/CreateProduct";
import OutputProduct from "../components/output/OutputProduct";
import { Category, CategoryOutput, ProductOutput } from "../interfaces";

function ProductPage({
    category,
    products,
}: {
    category: Array<Category>;
    products: ProductOutput;
}) {
    
    console.log("products", products)
    return (
        <Layout_Admin>
            <CreateProduct category={category} />
            <OutputProduct products={products} />

            {/* <CreateCategory />
            <OutputCategory category={category} /> */}
        </Layout_Admin>
    );
}

export default ProductPage;
