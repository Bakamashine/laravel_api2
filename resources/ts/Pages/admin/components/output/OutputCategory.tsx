import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FloatingLabel, Modal, Table } from "react-bootstrap";
import Paginate from "../../../components/Paginate";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { CategoryOutput, Category } from "../../../interfaces";

function OutputCategory({ category }: { category: CategoryOutput }) {
    const [show, setShow] = useState(false);
    const [point, setPoint] = useState<Category>();

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Название</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    {category.data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <Link
                                    className="btn btn-danger"
                                    method="delete"
                                    href={route("category.destroy", {
                                        category: item.id,
                                    })}
                                >
                                    Удалить
                                </Link>
                            </td>
                            <td>
                                
                                <Link className="btn btn-dark" href={route('category.edit', {
                                    id: item.id,
                                })}>Редактировать</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center align-items-center">
                <Paginate item={category} />
            </div>
        </>
    );
}

export default OutputCategory;
