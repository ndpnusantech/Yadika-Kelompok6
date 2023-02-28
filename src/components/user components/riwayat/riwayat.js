import "./riwayat.css";
import { Table, Container } from "react-bootstrap";

const Riwayat = () => {
  return (
    <Container>
      <div className="riwayatPembelian">
        <div className="title mt-5 mb-5">
          <h3 className="fw-semibold">Riwayat Pembelian</h3>
        </div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Riwayat;
