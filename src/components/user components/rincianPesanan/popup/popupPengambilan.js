import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import "./popup.css";
import { Link } from 'react-router-dom'

const PopupPengambilan = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <div className="popup mt-2">
            <Button
                onClick={handleShow}
                className="btn btn-md w-100 p-2 fs-5 text-white"
                style={{ backgroundColor: "#094067" }}
            >
                Order Sekarang
            </Button>
            <Modal show={show} onHide={handleClose} style={{ marginTop: "100px" }}>
                <Modal.Header closeButton>
                    <Modal.Title className="fs-5">
                        Silakan pilih metode pengambilan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center justify-content-evenly d-flex pb-4 pt-4">
                    <a href="https://wa.me/088971755075">
                    <Button
                        className="fw-semibold"
                        style={{ backgroundColor: "#3DA9FC" }}
                    >
                        Di antar
                    </Button>
                    </a>
                    <Link to="/idPesanan">
                        <Button
                            className="fw-semibold"
                            style={{ backgroundColor: "#3DA9FC" }}
                        >
                            Ambil ke toko
                        </Button>
                    </Link>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PopupPengambilan