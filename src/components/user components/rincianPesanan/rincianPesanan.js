import { Container } from "react-bootstrap";
import Popup from "./popup/popup";
import { useState } from "react";
import "./rincian.css";
import PopupPengambilan from "./popup/popupPengambilan";

const Rincian = () => {
  const [metodePembayaran, setMetodePembayaran] = useState("-");
  const handleCLickCash = () => {
    setMetodePembayaran("Cash");
  };

  return (
    <Container>
      <div className="boxRincian">
        <div className="header"></div>
        <div className="d-flex justify-content-between">
          <div className="content">
            <div className="nomorHandphone">
              <h4>Lena Cahyani (+62)83*******19</h4>
            </div>
            <div className="listProduct ps-3">
              <div className="product d-flex align-items-center mt-4">
                <img
                  src="/assets/obat/Vicks Formula.png"
                  alt=""
                  width="140px"
                />
                <div>
                  <h5>Viks Formula 44 Sirup 100 ml</h5>
                  <div className="d-flex">
                    <h6 className="me-5">Rp. 19.100</h6>
                    <span>4x</span>
                  </div>
                </div>
              </div>
              <div className="Id mt-4">
                <h6>Id Product : btk-2186346</h6>
                <h6>Id Pesanan : 73813726712132</h6>
              </div>
              <div className="product d-flex align-items-center mt-4">
                <img
                  src="/assets/obat/Vicks Formula.png"
                  alt=""
                  width="140px"
                />
                <div>
                  <h5>Viks Formula 44 Sirup 100 ml</h5>
                  <div className="d-flex">
                    <h6 className="me-5">Rp. 19.100</h6>
                    <span>4x</span>
                  </div>
                </div>
              </div>
              <div className="Id mt-4">
                <h6>Id Product : btk-2186346</h6>
                <h6>Id Pesanan : 73813726712132</h6>
              </div>
            </div>
            <div className="btnPesan mt-5">
              <PopupPengambilan />
            </div>
          </div>
          <div className="rincianHarga">
            <div>
              <h3>Rincian Pesanan</h3>
            </div>
            <table className="mt-3">
              <tr className="mb-5">
                <td style={{ paddingRight: "150px" }}>
                  <h5>Pengiriman</h5>
                </td>
                <td>6.000</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "150px" }}>
                  <h5>Total</h5>
                </td>
                <td>91.600</td>
              </tr>
              <tr>
                <td style={{ paddingRight: "150px" }}>
                  <h5>Subtotal</h5>
                </td>
                <td>91.600</td>
              </tr>
            </table>
            <div className="metodePembayaran mt-5">
              <h6>
                Metode Pembayaran :{" "}
                <span>
                  {metodePembayaran}
                  {/* Dana <span className="opacity-50">( 08967542333 )</span> */}
                </span>
              </h6>
              <Popup onclickCash={handleCLickCash} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Rincian;
