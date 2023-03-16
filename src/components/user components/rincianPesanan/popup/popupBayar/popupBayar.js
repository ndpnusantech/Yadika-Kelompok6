import { useState } from "react";
import Success from "../../../../success animation/success";

const PopupBayar = (props) => {
  const { show, onClose, title } = props;
  const [success, setSuccess] = useState(false);
  //   const [showPopupBayar, setShowPopupBayar] = useState()

  const handleClose = () => {
    onClose();
  };

  const handleBayarClick = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      onClose(); // menutup popup
    }, 2000);
  };

  const style = {
    borderBottom: "1px solid black",
    paddingBottom: "20px",
  };

  return success ? (
    <Success success="Pembayaran Berhasil" />
  ) : (
    <div className={`center-popup ${show ? "show" : ""}`}>
      <div className="popup-content">
        <div className="popup-header" style={style}>
          <h3>{title}</h3>
          <button className="close-button" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="popup-body">
          <table>
            <tr>
              <td>Metode Pembayaran :</td>
              <td>Ovo</td>
            </tr>
            <tr>
              <td>Total Yang Harus Dibayar :</td>
              <td>95.000</td>
            </tr>
          </table>
          <button
            className="p-2 btn btn-md btn-primary mt-5"
            onClick={handleBayarClick}
          >
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupBayar;
