import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import { router } from "@inertiajs/react";

interface Category {
    name: string;
    description: string;
}
function CreateCateg() {
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
        <>
            <Form className="m-3 bg-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Название категории</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите название категории"
                        onChange={handleChange}
                        value={values.name}
                    />
                    {/* <p className="red">{errors.email}</p> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Описание</Form.Label>

                    <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Введите ваше описание..."
                    >
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                        />
                    </FloatingLabel>
                </Form.Group>
                {/* <p className="red">{errors.password}</p> */}
                <Button variant="primary" type="submit">
                    Создать категорию
                </Button>
            </Form>
        </>
    );
}

export default CreateCateg;
