import { Container } from "react-bootstrap";
import "./pesanan.css";
const PesananSaya = () => {
  const arrow = "assets/Icon Sosial Media/arrow-right-circle 1.png";
  return (
    <Container>
      <div className="pesananSaya">
        <img src={arrow} alt="" />
        <div class="judul">
          <h1>Pesanan Saya</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Id Pesanan</th>
              <th>Product</th>
              <th>Jumlah</th>
              <th>Total Harga</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3788998978789921</td>
              <td>Vicks Formula 44 Sirup 100ml</td>
              <td>4</td>
              <td>Rp. 74.600</td>
              <td class="merah">Menunggu Pembayaran</td>
            </tr>
            <tr>
              <td>0998289819892212</td>
              <td>Oskadon Biru</td>
              <td>2</td>
              <td>Rp.8.000</td>
              <td>Diproses Penjual</td>
            </tr>
            <tr>
              <td>8989992300892545</td>
              <td>Paramek</td>
              <td>1</td>
              <td>Rp1.000</td>
              <td class="hijau">Sedang dikirim</td>
            </tr>
            <tr>
              <td>7878574890023028</td>
              <td>Insa</td>
              <td>4</td>
              <td>Rp.10.000</td>
              <td class="hijau2">Selesai</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default PesananSaya;
