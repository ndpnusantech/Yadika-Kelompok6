import "./diabetes.css";
import { obatDiabetes } from "../../../data/obatDiabetes";
import { Link } from "react-router-dom";
import { useState } from "react";

const Diabetes = () => {
  const [limit, setLimit] = useState(8);

  const handleLoadMore = (e) => {
    e.preventDefault();
    setLimit(limit + 8);
  };
  
  return (
    <div className="diabetes">
      <div className="wl">
        <h3>Obat Diabetes</h3>
      </div>
      <div className="form">
        <label htmlFor="">Jenis obat :</label>
        <select name="Jenis Obat" className="">
          <option value="Cair">Cair</option>
          <option value="Tablet">Tablet</option>
          <option value="Oles">Oles</option>
        </select>
      </div>
    <div className="listObat d-flex flex-wrap justify-content-between align-items-center">
    {obatDiabetes.slice(0, limit).map((data) => {
            return (
              <div className="card mb-5">
                <center>
                  <Link to="/detailObat">
                    <img src={data.image} alt="" />
                  </Link>
                </center>
                <h5 className="text-truncate">{data.namaObat}</h5>
                <p className="text-truncate">{data.takaran}</p>
                <div className="d-flex justify-content-start">
                  <h6 className="normal">{data.hargaNormal}</h6>
                  <h6>{data.hargaDiskon}</h6>
                </div>
                <button className="btn btn-md p-2  fw-semibold">Tambah</button>
              </div>
            );
          })}
    </div>
    {
          obatDiabetes.length > limit ? (
            <div className="loadMore mb-5">
              <a href="" className="loadMore text-center" onClick={handleLoadMore}>
                <p>Load More</p>
              </a>
            </div>
          ) : null
        }
    </div>
  );
};
export default Diabetes;
