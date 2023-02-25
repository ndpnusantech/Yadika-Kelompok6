import "./keranjang.css";
import Table from "react-bootstrap/Table";

const Keranjang = () => {
  const arrow = "/assets/Icon Sosial Media/arrow-right-circle 1.png";
  const viks = "/assets/obat/Vicks mini.png";

  return (
    <div className="keranjang">
      <img src={arrow} alt="" />
      <h1>Keranjang Anda</h1>
      <div className="box">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Jumlah</th>
              <th>Harga</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div className="mg">
                <td>
                  <img src={viks} alt="" className="OP" />
                </td>
                <td>
                  Vicks Formula 44 Sirup 100 ml <p>per botol</p>
                </td>
              </div>
              <td className="mg-1 d-flex align-items-center">
                <button>-</button>
                <span>5</span>
                <button>+</button>
              </td>

              <div className="mg-2">
                <td className="mg-2">95.000</td>
              </div>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="pesanan">
        <h3>Pesanan</h3>
        <hr></hr>
        <p className="Viks">Viks Formula.. 95.000</p>
        <hr></hr>
        <p>Total Rp.95.000</p>
        <button>Chekout</button>
      </div>
    </div>
  );
};

export default Keranjang;
