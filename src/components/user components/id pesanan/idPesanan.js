import "./idPesanan.css";

const IdPesanan = () => {
  const Vicks = "/assets/obat/Vicks Formula.png";

  return (
    <div className="idPesanan">
      <div className="box">
        <h3>ID PESANAN ANDA</h3>
        <hr />
        <img src={Vicks} alt="" />
        <h4>
          Vicks Formula 44 <br /> Sirup 100 ml br
        </h4>
        <h5>Rp.19.100 4x</h5>

        <p>
          id produk : btk-325906 <br />
          id pesanan: 320483602710924
        </p>
        <hr />
        <button>Silahkan Tunjukan Pada Kasir</button>
      </div>
    </div>
  );
};

export default IdPesanan;
