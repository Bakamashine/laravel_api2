import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FloatingLabel, Modal, Table } from "react-bootstrap";
import Paginate from "../Paginate";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { CategoryOutput, Category, ProductInput, ProductUpdate } from "../../interfaces";
import UpdateCategory from "../forms/UpdateCategory";
import { ProductOutput } from "../../interfaces";
import { Product } from "../../interfaces";
import UpdateProduct from "../forms/UpdateProduct";

function OutputProduct({ products, category }: { products: ProductOutput, category: Array<Category> }) {
    const [show, setShow] = useState(false);
    const [point, setPoint] = useState<Product>();

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
                                <a target="_blank" rel="noopener noreferrer" href={item.image_urls} className="no_decor">
                                    <img className="product_image_size" src={item.image_urls} alt={item.image_urls} />
                                </a>
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
                                <Button
                                    onClick={() => {
                                        setShow(true);
                                        item && setPoint(item);
                                    }}
                                >
                                    Редактировать
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center align-items-center">
                <Paginate item={products} />
            </div>

            <Modal show={show} fullscreen onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Редактирование</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <UpdateCategory
                        category={point as }
                        closeWindow={() => setShow(false)}
                    /> */}

                    <UpdateProduct category={category} product={point} closeWindow={() => setShow(false)} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OutputProduct;
