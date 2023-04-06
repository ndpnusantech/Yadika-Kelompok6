import Table from "react-bootstrap/Table";
import "./order.css";

const Order = () => {
  return (
    <div className="tabelOrder">
      <h1 className="mt-5 mb-5">
        {" "}
        <b>Order</b>
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Payment Method</th>
            <th>Id Pesanan</th>
            <th>Total Harga</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Vicks Formula 44 Sirup 100ml</td>
            <td>4</td>
            <td>OVO</td>
            <td>320483602710924</td>
            <td>Rp. 76.400</td>
            <td>
              <button>Accept</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="hijau">Accepted</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="merah">refuse order</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Vicks Formula 44 Sirup 100ml</td>
            <td>4</td>
            <td>OVO</td>
            <td>320483602710924</td>
            <td>Rp. 76.400</td>
            <td>
              <button>Accept</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="hijau">Accepted</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="merah">refuse order</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Vicks Formula 44 Sirup 100ml</td>
            <td>4</td>
            <td>OVO</td>
            <td>320483602710924</td>
            <td>Rp. 76.400</td>
            <td>
              <button>Accept</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="hijau">Accepted</button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Vicks Formula 44 Sirup 100ml</td>
            <td>4</td>
            <td>OVO</td>
            <td>320483602710924</td>
            <td>Rp. 76.400</td>
            <td>
              <button>Accept</button>
            </td>
          </tr>

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="hijau">Accepted</button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <button className="merah">refuse order</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Order;
