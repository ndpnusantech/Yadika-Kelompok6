import React from 'react';

function BarangList(props) {
  const deleteHandler = (id) => {
    props.onDelete(id);
  };

  return (
    <div className='tableStorage'>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama Barang</th>
          <th>Harga</th>
          <th>Jumlah</th>
          <th>Deskripsi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {props.barang.map((barang) => (
          <tr key={barang.id}>
            <td>{barang.id}</td>
            <td>{barang.nama}</td>
            <td>{barang.harga}</td>
            <td>{barang.jumlah}</td>
            <td>{barang.deskripsi}</td>
            <td>
              <button onClick={() => deleteHandler(barang.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default BarangList;
