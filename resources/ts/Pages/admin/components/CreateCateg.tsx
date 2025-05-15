import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import { router, usePage } from "@inertiajs/react";
import Layout_Admin from "../layout_admin";

interface Category {
    name: string;
    description: string;
}
function CreateCateg() {
    const { errors } = usePage<{ errors: Error }>().props;

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
        </Layout_Admin>
    );
}

export default CreateCateg;
