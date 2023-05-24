import "./riwayat.css";
import { Table, Container, Button } from "react-bootstrap";
import PopupIdPesanan from "../rincianPesanan/popup/popupIdPesanan";
import React, { useState } from "react";

const Riwayat = () => {
  const [modalId, setModalId] = useState(false);

  const onHide = () => setModalId(false);

  return (
    <Container>
      <div className="riwayatPembelian">
        <div className="title mt-5 mb-5">
          <h3 className="fw-semibold">Riwayat Pembelian</h3>
        </div>
        <Table className="rounded text-center">
          <thead>
            <tr>
              <th>No</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Total Harga</th>
              <th>Payment Method</th>
              <th>ID Pesanan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="align-middle">1</td>
              <td className="align-middle">Vicks Formula 44 Sirup 100 ml</td>
              <td className="align-middle">4</td>
              <td className="align-middle">95.500</td>
              <td className="align-middle">Ovo</td>
              <td className="align-middle">
                <button
                  className="btn btn-md btn-primary"
                  onClick={() => setModalId(true)}
                >
                  View ID Pesanan
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <PopupIdPesanan
        show={modalId}
        onHide={onHide}
        footer={<Button onClick={onHide}>Close</Button>}
      />
    </Container>
  );
};

export default Riwayat;
