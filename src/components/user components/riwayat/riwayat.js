import "./riwayat.css";
import { Table, Container } from "react-bootstrap";

const Riwayat = () => {
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
              <td>1</td>
              <td>Vicks Formula 44 Sirup 100 ml</td>
              <td>4</td>
              <td>95.500</td>
              <td>Ovo</td>
              <td>320483602710924</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Riwayat;
