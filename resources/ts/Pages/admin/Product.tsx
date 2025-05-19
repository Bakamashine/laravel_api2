import React from "react";
import Layout_Admin from "./layout_admin";
import CreateProduct from "./components/forms/Products/CreateProduct";
import OutputProduct from "./components/output/OutputProduct";
import { CategoryInput, ProductOutput } from "../interfaces";

function ProductPage({
    category,
    products,
}: {
    category: Array<CategoryInput>;
    products: ProductOutput;
}) {
    console.log("products", products);
    return (
        <Layout_Admin>
            <CreateProduct category={category} />
            <OutputProduct products={products} category={category} />

            {/* <CreateCategory />
            <OutputCategory category={category} /> */}
        </Layout_Admin>
    );
}

export default ProductPage;
