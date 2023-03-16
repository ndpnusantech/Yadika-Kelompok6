import "./popup.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import PopupBayar from "./popupBayar/popupBayar";

const PopupTautkan = (props) => {
    const { show, onClose, title } = props;
    const [showPopupBayar, setShowPopupBayar] = useState(false);

    const handleClose = () => {
        onClose();
    };

    const handleKonfirmasi = (event) => {
        event.preventDefault();
        setShowPopupBayar(true);
    };

    return (
        <>
            {showPopupBayar ? (
                <PopupBayar
                    show={showPopupBayar}
                    onClose={() => setShowPopupBayar(false)}
                    title="Pembayaran"
                />
            ) : (
                <div className={`center-popup ${show ? "show" : ""}`}>
                    <div className="popup-content">
                        <div className="popup-header">
                            <h3>{title}</h3>
                            <button className="close-button" onClick={handleClose}>
                                X
                            </button>
                        </div>
                        <div className="popup-body">
                            <div className="ContentPopup">
                                <Form onSubmit={handleKonfirmasi}>
                                    <Form.Label>Masukan akun Anda</Form.Label>
                                    <Form.Control placeholder="08726715632" />

                                    <button
                                        className="mt-3 btn btn-md btn-primary"
                                        type="submit"
                                    >
                                        Konfirmasi
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PopupTautkan;
