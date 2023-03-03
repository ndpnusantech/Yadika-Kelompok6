import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  const obat = "./assets/obat/Vicks Formula.png";

  return (
    <Container>
      <div className="detail d-flex justify-content-between">
        <div className="product d-flex flex-column justify-content-center">
          <img src={obat} alt="" width="250px" className="ms-3" />
          <h3 className="fw-semibold">
            Vicks Formula 44 Sirup <br /> 100 ml
          </h3>
          <p className="fs-4">
            <span className="text-decoration-line-through opacity-50 me-3">
              Rp 31.600
            </span>
            Rp 19.100
          </p>
          <Link to="/keranjang">
            <button
              className="btn btn-md w-100 p-3 text-white mt-5 fw-semibold fs-5"
              style={{ backgroundColor: "#3DA9FC" }}
            >
              Tambah ke Keranjang
            </button>
          </Link>
        </div>
        <div className="box mt-3 mb-2 p-3">
          <h4>Dekripsi</h4>
          <p>
            VICKS FORMULA 44 SIRUP merupakan Sirup Obat Batuk dengan kombinasi
            formula Dextromethorphan HBr dan Doxylamine Succinate untuk
            meringankan batuk yang tidak berdahak disertai bersin-bersin/
            alergi.
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
            meringankan batuk yang tidak berdahak disertai bersin-bersin/
            alergi.
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
          <h4>Aturan Pakai</h4>
          <p>Sesudah makan</p>
          <h4>Kontra Indikasi</h4>
          <p>Hipersensitivitas. Penyakit hati atau kegagalan pernafasan</p>
          <h4>Efek Samping</h4>
          <p>
            Pemakaian obat umumnya memiliki efek samping tertentu dan sesuai
            dengan masing-masing individu. Jika terjadi efek samping yang
            berlebih dan berbahaya, harap konsultasikan kepada tenaga medis.
            Efek samping yang mungkin terjadi dalam penggunaan obat adalah:
            Dapat menyebabkan mual, pusing, mengantuk, & konstipasi.
          </p>
          <h4>Golongan Product</h4>
          <p>Obat Bebas Terbatas (Biru)</p>
          <h4>Expired</h4>
          <p>20 - 05 - 2025</p>
        </div>
      </div>
    </Container>
  );
};
export default Detail;
