import React, { useState, ChangeEvent, FormEvent } from "react";
import { usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import Layout from "../Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface RegisterInterface {
    email: string;
    password: string;
    password_confirmation: string;
}

function Register() {
    const { errors } = usePage<{ errors: Error }>().props;

    const [values, setValues] = useState<RegisterInterface>({
        email: "",
        password: "",
        password_confirmation: "",
    });

    /**
     * Изменение значений в компоненте
     * @param e
     */
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    }

    /**
     * Отправка формы
     * @param e
     */
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post("/register", values as Record<string, any>);
    }

    return (
        <Layout>
            <Form className="m-3 bg-form" onSubmit={handleSubmit}>
                <h5 className="text-center">Регистрация</h5>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Ваша почта</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Введите почту"
                        onChange={handleChange}
                        value={values.email}
                    />
                    <p className="red">{errors.email}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите пароль"
                        onChange={handleChange}
                        value={values.password}
                    />
                </Form.Group>
                <p className="red">{errors.password}</p>
                
                
                <Form.Group className="mb-3" controlId="password_confirmation">
                    <Form.Label>Повторите пароль</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите пароль"
                        onChange={handleChange}
                        value={values.password_confirmation}
                    />
                </Form.Group>
                <p className="red">{errors.password_confirmation}</p>
                <Button variant="primary" type="submit">
                    Регистрация
                </Button>
            </Form>
        </Layout>
    );
}

export default Register;
