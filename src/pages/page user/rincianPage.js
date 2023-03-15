import { Link } from "react-router-dom";
import Rincian from "../../components/user components/rincianPesanan/rincianPesanan";

const PageRincian = () => {
  return (
    <div className="rincianPage">
      <div className="Back ms-3 me-3 mt-3">
        <Link to="/keranjang">
          <img
            src="/assets/Icon Sosial Media/arrow-right-circle 1.png"
            alt=""
            width="50px"
          />
        </Link>
      </div>
      <Rincian />
    </div>
  );
};

export default PageRincian;
