import { Container, Form, Button } from "react-bootstrap";
import { dataObat } from "../../../data/dataObat";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./semuaMacam.css";

const SemuaMacam = () => {
  const [limit, setLimit] = useState(8);

  const handleLoadMore = (e) => {
    e.preventDefault();
    setLimit(limit + 8);
  };

  return (
    <div className="Semua-Macam">
      <Container>
        <h3 className="mb-4">Semua Macam - Macam Obat</h3>
        <Form className="d-flex w-50 mb-5 mt-5">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 p-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>

        <div className="listObat d-flex flex-wrap justify-content-between align-items-center">
          {dataObat.slice(0, limit).map((data) => {
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
        {dataObat.length > limit ? (
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
      </Container>
    </div>
  );
};

export default SemuaMacam;
