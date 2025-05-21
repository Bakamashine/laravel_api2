import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FloatingLabel, Modal, Table } from "react-bootstrap";
import Paginate from "../../../components/Paginate";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { Category } from "../../../interfaces";
import { ProductOutput, Product } from "../../../interfaces";



function OutputProduct({ products, category }: { products: ProductOutput, category: Array<Category> }) {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Название категории</th>
                        <th>Описание</th>
                        <th>Цена</th>
                        <th>Фото</th>
                    </tr>
                </thead>
                <tbody>
                    {products.data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                {item.image.map((item) => (
                                    <a key={item.id} target="_blank" rel="noopener noreferrer" href={item.image_urls} className="no_decor">
                                        <img className="product_image_size" src={item.image_urls} />
                                    </a>
                                ))}
                            </td>
                            <td>
                                <Link
                                    className="btn btn-danger"
                                    method="delete"
                                    href={route("product.destroy", {
                                        product: item.id,
                                    })}
                                >
                                    Удалить
                                </Link>
                            </td>
                            <td>
                                <Link className="btn btn-dark" href={route("product.edit", {
                                    id: item.id
                                })}>Редактировать</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center align-items-center">
                <Paginate item={products} />
            </div>
        </>
    );
}

export default OutputProduct;
