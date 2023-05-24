import { Container } from "react-bootstrap";
import TitleAndOpt from "../titleAndOpt";
import { DataObatDiabetes } from "../../../../data/obatDiabetes";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import './style.css'

const ObatDiabetes = () => {
  const [limit, setLimit] = useState(8);

  const handleLoadMore = (e) => {
    e.preventDefault();
    setLimit(limit + 8);
  };

  return (
    <Container>
      <div className="obatDiabetes">
        <TitleAndOpt
          title="Obat Diabetes"
          opt1="Cair"
          opt2="Tablet"
          opt3="Kapsul"
        />
        <div className="product">
          <div className="listObat d-flex flex-wrap justify-content-between align-items-center">
            {DataObatDiabetes.slice(0, limit).map((data) => {
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
                  <button className="btn btn-md p-2  fw-semibold">
                    Tambah
                  </button>
                </div>
              );
            })}
          </div>
          {DataObatDiabetes.length > limit ? (
            <div className="loadMore mb-5">
              <a
                href=""
                className="loadMore text-center"
                onClick={handleLoadMore}
              >
                <p>Load More</p>
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </Container>
  );
};

export default ObatDiabetes;
