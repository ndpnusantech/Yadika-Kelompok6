import "./keranjang.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Keranjang = () => {
  const arrow = "/assets/Icon Sosial Media/arrow-right-circle 1.png";
  const viks = "/assets/obat/Vicks mini.png";

  

  return (
    <div className="keranjang">
      <div className="back m-3">
        <Link to="/obat">
          <img src={arrow} width="50px" />
        </Link>
      </div>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ width: "67%" }}
      >
        <div className="title mb-3" style={{ marginLeft: "110px" }}>
          <h1>Keranjang Anda</h1>
        </div>
        <div className="tambahProduct mt-2">
          <Link to="/obat">
            <button>Tambah Product</button>
          </Link>
        </div>
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
              <td>
                19.100 <br />
                <span className="opacity-50 text-decoration-line-through">
                  32.600
                </span>
              </td>
            </tr>
          </Table>
        </div>
        <div className="pesanan p-3">
          <div className="mt-2 mb-3">
            <h3>Pesanan</h3>
          </div>
          <hr style={{ padding: "1px" }} />
          <div className="d-flex justify-content-between">
            <p className="">Keranjang (5 Item)</p>
            <span className="">95.000</span>
          </div>
          <hr
            style={{
              marginTop: "150px",
              padding: "1px",
            }}
          />
          <p className="">Total Rp.95.000</p>
          <Link to="/rincianPesanan">
            <button
              className="btn btn-md w-100 fw-semibold"
              style={{ backgroundColor: "#3da9fc", color: "white" }}
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Keranjang;
