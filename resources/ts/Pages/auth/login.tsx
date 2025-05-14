import React from "react";
import Layout from "../Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
    return (
        <Layout>
            <Form className="m-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ваша почта</Form.Label>
                    <Form.Control type="email" placeholder="Введите почту" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Введите пароль" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Авторизоваться
                </Button>
            </Form>
        </Layout>
    );
}

export default BasicExample;
