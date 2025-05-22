import { Category, ProductInput, ProductUpdate } from "../../../../interfaces";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import { router, usePage } from "@inertiajs/react";
import { route } from "ziggy-js";

// FIXME: Не выводится ошибки валидации с изображением
function EditProduct({
    category,
    product,
}: {
    category: Array<Category>;
    product: ProductUpdate;
}) {
    const { errors } = usePage<{ errors: Error }>().props;

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        values.image === undefined && delete values.image;

        console.log("values: ", values);
        router.post(`/product/${product.id}?_method=PUT`, values as Record<string, any>, {
            onError: () => {
                console.log("errors: ", errors);
            }
        });
    }

    const [values, setValues] = useState<ProductUpdate>({
        id: product.id,
        name: product.name,
        category_id: product.category_id,
        description: product.description === null ? "" : product.description,
        price: product.price,
        image: undefined,
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    }

    function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
        const { id, value } = e.target;

        setValues((prevValues) => ({
            ...prevValues,
            [id]: typeof value === "string" && parseInt(value),
        }));
    }

    function uploadImage(e: ChangeEvent<HTMLInputElement>) {
        let files = e.target.files;
        if (files !== null) {
            setValues((prevValues) => ({
                ...prevValues,
                image_urls: files,
            }));
        } else console.error("Изображений нет");
    }

    return (
        <>
            <Form className="m-3 bg-form" method="post" onSubmit={handleSubmit}>
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
                <Form.Group className="mb-3" controlId="category_id">
                    <Form.Label>Выберите категорию</Form.Label>
                    <Form.Select
                        onChange={handleSelectChange}
                        value={values.category_id}
                    >
                        {category.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.name}
                            </option>
                        ))}
                    </Form.Select>
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
                <Form.Group className="mb-3" controlId="price">
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
                <Form.Group className="mb-3" controlId="image_urls">
                    <Form.Label>Выберите изображение</Form.Label>
                    <Form.Control
                        type="file"
                        title="Выберите изображение"
                        onChange={uploadImage}
                        multiple
                    />
            {errors.image}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Обновить товар
                </Button>
            </Form>
        </>
    );
}

export default EditProduct;
