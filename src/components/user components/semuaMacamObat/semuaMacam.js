import { Container, Form, Button } from "react-bootstrap";
import CtaSM from "./CtaSM";
import "./semuaMacam.css";

const SemuaMacam = () => {
  const obatArr = Array(10).fill();

  const obatList = obatArr.map((index) => {
    return (
      <CtaSM
        key={index}
        image="/assets/obat/Vicks Formula.png"
        namaObat="Vicks Formula 44 Sirup 100 ml"
        takaran="per botol"
        hargaNormal="Rp 31.600 "
        hargaDiskon="Rp 19.100"
      />
    );
  });
  return (
    <div className="Semua-Macam">
      <Container>
        <h3 className="mb-4">Semua Macam - Macam Obat</h3>
        <Form className="d-flex m-5">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <div className="d-flex flex-wrap justify-content-between">
          {obatList}
        </div>
      </Container>
    </div>
  );
};

export default SemuaMacam;
