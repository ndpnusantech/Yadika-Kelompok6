import Table from "react-bootstrap/Table";
import "./order.css";
import OrderModal from "./orderModal";
import { useState } from "react";

const Order = () => {
  const [show, setShow] = useState(false);
  const [costumerName, setCostumerName] = useState("");

  const handleShow = (costumers) => {
    setCostumerName(costumers);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  return (
    <div className="BoxOrder">
      <div className="title my-4 mx-3">
        <h2>Order</h2>
      </div>
      <div className="tableOrder mx-3">
        <Table striped bordered hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Costumer Name</th>
              <th>Id User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Iqbal</td>
              <td>ycl0708</td>
              <td>
                <button
                  className="btn btn-md btn-primary"
                  onClick={() => handleShow("Iqbal")}
                >
                  View Order
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Fahmi</td>
              <td>tfm8762</td>
              <td>
                <button
                  className="btn btn-md btn-primary"
                  onClick={() => handleShow("Fahmi")}
                >
                  View Order
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Bagogo</td>
              <td>khv9281</td>
              <td>
                <button
                  className="btn btn-md btn-primary"
                  onClick={() => handleShow("Bagogo")}
                >
                  View Order
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <OrderModal
        show={show}
        hide={handleClose}
        title={costumerName + "'s" + " Orders"}
      />
    </div>
  );
};

export default Order;
