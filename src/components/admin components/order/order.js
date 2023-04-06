import Table from 'react-bootstrap/Table';
import "./order.css";

const Order = () => {
  return (
    <div className='tabelOrder'>
      <h1 className='mt-5 mb-5'> <b>Order</b></h1>
      <Table striped bordered hover variant='dark'>
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
              <button className="btn btn-md btn-primary me-2">Accept</button>
              <button className="btn btn-md btn-danger">Reject</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Vicks Formula 44 Sirup 100ml</td>
            <td>4</td>
            <td>OVO</td>
            <td>320483602710924</td>
            <td>Rp. 76.400</td>
            <td>
              <button className="btn btn-md btn-primary me-2">Accept</button>
              <button className="btn btn-md btn-danger">Reject</button>
            </td>

          </tr>
          <tr>
            <td>3</td>
            <td>Vicks Formula 44 Sirup 100ml</td>
            <td>4</td>
            <td>OVO</td>
            <td>320483602710924</td>
            <td>Rp. 76.400</td>
            <td>
              <button className="btn btn-md btn-primary me-2">Accept</button>
              <button className="btn btn-md btn-danger">Reject</button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Vicks Formula 44 Sirup 100ml</td>
            <td>4</td>
            <td>OVO</td>
            <td>320483602710924</td>
            <td>Rp. 76.400</td>
            <td><button className='hijau disabled'>Accepted</button></td>

          </tr>
          <tr>
            <td>5</td>
            <td>Vicks Formula 44 Sirup 100ml</td>
            <td>4</td>
            <td>OVO</td>
            <td>320483602710924</td>
            <td>Rp. 76.400</td>
            <td><button className="merah disabled cur">Rejected</button></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Vicks Formula 44 Sirup 100ml</td>
            <td>4</td>
            <td>OVO</td>
            <td>320483602710924</td>
            <td>Rp. 76.400</td>
            <td><button className='merah disabled cur'>Rejected</button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Order;