import "./detail.css";

const Detail = () => {
  const obat = "./assets/obat/Vicks Formula.png";

  return (
    <div className="detail">
      <img src={obat} alt="" />
      <div className="des">
        <h3>
          Vicks Formula 44 Sirup <br /> 100 ml
        </h3>
        <h4>RP 19.100 - 31.600</h4>
        <button>Tambah ke Keranjang</button>
      </div>
      <div className="box">
        <h4>Dekripsi</h4>
        <p>
          VICKS FORMULA 44 SIRUP merupakan Sirup Obat Batuk dengan kombinasi
          formula Dextromethorphan HBr dan Doxylamine Succinate untuk
          meringankan batuk yang tidak berdahak disertai bersin-bersin/ alergi.
        </p>
        <h4>Komposisi</h4>
        <p>
          setiap 5ml mengandung: Dextromethrophan Hydrobromide 5mg Doxylamine
          Succinate 2mg
        </p>
        <h4>Dosis</h4>
        <p>
          Gunakan setiap 4 jam sesuai kebutuhan, sampai 6x sehari. Dewasa : 12
          tahun ke atas : 2 sendok takar (10ml) Anak-anak : 6-12 tahun : 1
          sendok takar (5ml) atau gunakan sesuai petunjuk dokter
        </p>
        <h4>Dekripsi</h4>
        <p>
          VICKS FORMULA 44 SIRUP merupakan Sirup Obat Batuk dengan kombinasi
          formula Dextromethorphan HBr dan Doxylamine Succinate untuk
          meringankan batuk yang tidak berdahak disertai bersin-bersin/ alergi.
        </p>
        <h4>Komposisi</h4>
        <p>
          setiap 5ml mengandung: Dextromethrophan Hydrobromide 5mg Doxylamine
          Succinate 2mg
        </p>
        <h4>Dosis</h4>
        <p>
          Gunakan setiap 4 jam sesuai kebutuhan, sampai 6x sehari. Dewasa : 12
          tahun ke atas : 2 sendok takar (10ml) Anak-anak : 6-12 tahun : 1
          sendok takar (5ml) atau gunakan sesuai petunjuk dokter
        </p>
      </div>
    </div>
  );
};
export default Detail;
