import "./keranjang.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Keranjang = () => {
  const arrow = "/assets/Icon Sosial Media/arrow-right-circle 1.png";
  const viks = "/assets/obat/Vicks mini.png";

  return (
    <div className="keranjang">
      <div className="back m-4">
        <Link to="/obat">
          <img src={arrow} width="50px" />
        </Link>
      </div>
      <div className="title mb-3" style={{ marginLeft: "110px" }}>
        <h1>Keranjang Anda</h1>
      </div>
      <div className="container-fluid d-flex justify-content-around">
        <div className="tableKeranjang p-3">
          <Table className="text-center">
            <tr>
              <th style={{ width: "300px" }}>Product Name</th>
              <th>Jumlah</th>
              <th>Total Harga</th>
            </tr>
            <tr>
              <td className="d-flex align-items-center">
                <div className="productImage">
                  <img src={viks} width="50px" />
                </div>
                <div className="productName">Vicks Formula 44 Sirup 100 ml</div>
              </td>
              <td>
                <button>-</button>
                <span>5</span>
                <button>+</button>
              </td>
              <td>95.000</td>
            </tr>
          </Table>
        </div>
        <div className="pesanan p-3">
          <div className="mt-2 mb-3">
            <h3>Pesanan</h3>
          </div>
          <hr style={{ padding: "1px" }} />
          <div className="d-flex justify-content-between">
            <p className="">Viks Formula...</p>
            <span className="">95.000</span>
          </div>
          <hr
            style={{
              marginTop: "150px",
              padding: "1px",
            }}
          />
          <p className="">Total Rp.95.000</p>
          <button
            className="btn btn-md w-100 mt-3"
            style={{ backgroundColor: "#3da9fc" }}
          >
            Chekout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
