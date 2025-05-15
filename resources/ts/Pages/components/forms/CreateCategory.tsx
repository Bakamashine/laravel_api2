import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import { router, usePage } from "@inertiajs/react";
import { Category } from "../../interfaces";

function CreateCategory() {
    const { errors } = usePage<{ errors: Error }>().props;
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post("/category", values as Record<string, any>);
    }

    const [values, setValues] = useState<Category>({
        name: "",
        description: "",
    });
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    }

    return (
        <>
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
                        value={values.description}
                    />
                </FloatingLabel>
                <p className="red">{errors.description}</p>
                <Button variant="primary" type="submit">
                    Создать категорию
                </Button>
            </Form>
        </>
    );
}

export default CreateCategory;
