import React, { useState } from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

function FullScreenModal() {
    const values = [
        true,
        "sm-down",
        "md-down",
        "lg-down",
        "xl-down",
        "xxl-down",
    ];
    const [fullscreen, setFullscreen] = useState<string|true|undefined>(true);
    const [show, setShow] = useState(true);
    return (
        <>
            <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    );
}

export default FullScreenModal;
