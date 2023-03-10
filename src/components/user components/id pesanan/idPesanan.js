import "./idPesanan.css";

const IdPesanan = () => {
  const Vicks = "/assets/obat/Vicks Formula.png";

  return (
    <div className="IdPesanan mt-5">
      <div className="card mx-auto">
        <div className="title text-center pt-3">
          <h3>Id Pesanan Anda</h3>
        </div>
        <hr />
        <div className="product d-flex mt-3 mb-3">
          <img src={Vicks} alt="" width="100px" />
          <div className="nameproduct">
            <h4>Vicks Formula 44 Sirup 100 ml</h4>
            <div className="harga d-flex align-items-center justify-content-between">
              <h5>19.100</h5>
              <h5>4x</h5>
            </div>
          </div>
        </div>
        <div className="idProduct mt-4 mb-4">
          <span>Id Product : btk-2673244</span> <br />
          <span>Id Pesanan : 3818293892922</span>
        </div>
        <hr />
        <span className="bg-danger p-2 mb-3 me-2 ms-2 text-white text-center rounded-2 fw-semibold">
          Silakan tunjukan kepada kasir
        </span>
      </div>
    </div>
  );
};

export default IdPesanan;
