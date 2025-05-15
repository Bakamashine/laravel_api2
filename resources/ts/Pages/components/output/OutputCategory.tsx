import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FloatingLabel, Table } from "react-bootstrap";
import Paginate from "../Paginate";
import { Link } from "@inertiajs/react";
import { route } from "ziggy-js";
import { CategoryOutput } from "../../interfaces";

function OutputCategory({ category }: { category: CategoryOutput }) {
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
                                {/* <Button
                                    onClick={() => {
                                        setIsModalView(true);
                                    }}
                                >
                                    Редактировать
                                </Button> */}
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
