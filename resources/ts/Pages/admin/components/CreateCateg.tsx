import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel, Pagination, Table } from "react-bootstrap";
import { router, usePage } from "@inertiajs/react";
import Layout_Admin from "../layout_admin";


/**
 * Поля Категории
 */
interface Category {
    id?: number;
    name: string;
    description: string;
}

/**
 * Принятие данных с контроллера с пагинацией
 */
interface CategoryOutput {
    current_page: number;
    data: Category[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
        active: boolean;
        label: string;
        url: string;
    }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
}

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

    let active = category.current_page;
    let items: JSX.Element[] = [];
    for (let number = 1; number <= category.last_page; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === active}
                onClick={() => router.get(category.links[number].url)} // Переход по URL
            >
                {number}
            </Pagination.Item>
        );
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

            <div className="pt-2">
                <Pagination>{items}</Pagination>
            </div>
        </Layout_Admin>
    );
}

export default CreateCateg;
