import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Pagination, Table } from "react-bootstrap";
import { router, usePage } from "@inertiajs/react";
import Layout_Admin from "../layout_admin";
import { Category, CategoryOutput } from "../../interfaces";
import Paginate from "../../components/Paginate";

function CreateCateg({ category }: { category: CategoryOutput }) {
    const { errors } = usePage<{ errors: Error }>().props;

    console.log(category);

    const [values, setValues] = useState<Category>({
        name: "",
        description: "",
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post("/category", values as Record<string, any>);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    }

    return (
        <Layout_Admin>
            <Form className="m-3 bg-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Название категории</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите название категории"
                        onChange={handleChange}
                        value={values.name}
                    />
                    <p className="red">{errors.name}</p>
                </Form.Group>

                <Form.Label>Описание</Form.Label>

                <FloatingLabel
                    className="mb-3"
                    controlId="description"
                    label="Введите ваше описание..."
                >
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                        onChange={handleChange}
                    />
                </FloatingLabel>
                <p className="red">{errors.description}</p>
                <Button variant="primary" type="submit">
                    Создать категорию
                </Button>
            </Form>

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
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center align-items-center">
                <Paginate item={category} />
            </div>
        </Layout_Admin>
    );
}

export default CreateCateg;
