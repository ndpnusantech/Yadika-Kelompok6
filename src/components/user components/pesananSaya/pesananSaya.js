import { Container, Table } from "react-bootstrap";
import "./pesanan.css";
const PesananSaya = () => {
  return (
    <Container>
      <div className="pesananSaya">
        <div class="title mb-5 mt-5">
          <h2 className="fw-semibold">Pesanan Saya</h2>
        </div>
        <Table bordered className="text-center">
          <thead>
            <tr>
              <th>Id Pesanan</th>
              <th>Product</th>
              <th>Jumlah</th>
              <th>Metode Pembayaran</th>
              <th>Total Harga</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3788998978789921</td>
              <td>Vicks Formula 44 Sirup 100ml</td>
              <td>4</td>
              <td>Dana</td>
              <td>Rp. 74.600</td>
              <td class="text-danger fw-semibold">Menunggu Pembayaran</td>
            </tr>
            <tr>
              <td>0998289819892212</td>
              <td>Oskadon Biru</td>
              <td>2</td>
              <td>Ovo</td>
              <td>Rp.8.000</td>
              <td className="text-secondary fw-semibold">Diproses Penjual</td>
            </tr>
            <tr>
              <td>8989992300892545</td>
              <td>Paramek</td>
              <td>1</td>
              <td>COD</td>
              <td>Rp1.000</td>
              <td class="text-success-emphasis fw-semibold">Sedang dikirim</td>
            </tr>
            <tr>
              <td>7878574890023028</td>
              <td>Insa</td>
              <td>4</td>
              <td>Shopee Pay</td>
              <td>Rp.10.000</td>
              <td class="text-success fw-semibold">Selesai</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default PesananSaya;
