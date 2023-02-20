import React from "react"
import Table from 'react-bootstrap/Table';

function tableUser() {
  return (
    <div className="tabel">
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

export default tableUser;