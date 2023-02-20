import { Link } from "react-router-dom";

const CtaSM = (props) => {
  return (
    <div className="CTA-SM">
      <div className="card">
        <center>
          <Link to="/detailObat">
            <img src={props.image} alt="" />
          </Link>
        </center>
        <h5>{props.namaObat}</h5>
        <p>{props.takaran}</p>
        <div className="d-flex">
          <h6 className="normal">{props.hargaNormal}</h6>
          <h6>{props.hargaDiskon}</h6>
        </div>
        <button>Tambah</button>
      </div>
    </div>
  );
};

export default CtaSM;
