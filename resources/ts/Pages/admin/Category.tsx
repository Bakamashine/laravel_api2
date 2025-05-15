import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Pagination, Table } from "react-bootstrap";
import { Link, router, usePage } from "@inertiajs/react";
import Layout_Admin from "./layout_admin";
import { Category, CategoryOutput } from "../interfaces";
import Paginate from "../components/Paginate";
import { route } from "ziggy-js";
import FullScreenModal from "../components/FullScreenModal";
import CreateCategory from "../components/forms/CreateCategory";
import OutputCategory from "../components/output/OutputCategory";

function CategoryPage({ category }: { category: CategoryOutput }) {

    const [isModalView, setIsModalView] = useState(false);

    return (
        <Layout_Admin>
            <CreateCategory />
            <OutputCategory category={category} />
        </Layout_Admin>
    );
}

export default CategoryPage;
