import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FloatingLabel, Modal, Table } from "react-bootstrap";
import Paginate from "../Paginate";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { CategoryOutput, Category } from "../../interfaces";
import UpdateCategory from "../forms/UpdateCategory";

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
                <Paginate item={category} />
            </div>

            <Modal show={show} fullscreen onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Редактирование</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateCategory category={point as Category} closeWindow={() => setShow(false)}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default OutputCategory;
