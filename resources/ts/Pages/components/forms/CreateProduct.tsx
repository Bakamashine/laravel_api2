import React, { ChangeEvent, FormEvent, JSX, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import { router, usePage } from "@inertiajs/react";
import { Category } from "../../interfaces";
import { Product, ProductInput } from "../../interfaces";

function CreateProduct({ category }: { category: Array<Category> }) {
    const { errors } = usePage<{ errors: Error }>().props;
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post("/product", values as Record<string, any>);
    }

    const [values, setValues] = useState<ProductInput>({
        name: "",
        category_id: 0,
        description: "",
        price: 0,
        image_urls: "",
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
                {/* Название товара */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Название товара</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите название категории"
                        onChange={handleChange}
                        value={values.name}
                    />
                    <p className="red">{errors.name}</p>
                </Form.Group>

                {/* Выбор категории */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Выберите категорию</Form.Label>
                    <Form.Select>
                        {category.map((item) => (
                            <>
                                <option>{item.name}</option>
                            </>
                        ))}
                    </Form.Select>
                    <p className="red">{errors.name}</p>
                </Form.Group>

                {/* Описание */}
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

                {/* Выбор цены */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Введите цену</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите название категории"
                        onChange={handleChange}
                        value={values.price}
                    />
                    <p className="red">{errors.price}</p>
                </Form.Group>

                {/* Выберите изображение */}
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Выберите изображение</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите название категории"
                        onChange={handleChange}
                        value={values.name}
                    />
                    <p className="red">{errors.name}</p>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Создать категорию
                </Button>
            </Form>
        </>
    );
}

export default CreateProduct;
