import React from "react"
import Table from 'react-bootstrap/Table';
import "./dataUser.css"

function TableUser() {
  return (
    <div className="tabel">
    <h3 className="mb-5">Data Users</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Username</th>
          <th>Email</th>
          <th>No Handphone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Fahmi Fahrizal</td>
          <td>17</td>
          <td>fahmifh19</td>
          <td>bagogo@gmail.com</td>
          <td>6289383649299</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default TableUser;