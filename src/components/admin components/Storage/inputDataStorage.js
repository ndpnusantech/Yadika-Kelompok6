import React, { useState } from 'react';
import "./style.css";


function BarangForm(props) {
  const [barang, setBarang] = useState({
    id: '',
    nama: '',
    harga: '',
    jumlah: '',
    deskripsi: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(barang);
    setBarang({
      id: '',
      nama: '',
      harga: '',
      jumlah: '',
      deskripsi: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBarang((prevBarang) => ({ ...prevBarang, [name]: value }));
  };

  return (
    <div className='inputStorage'>
    <form onSubmit={handleSubmit}>
      <label>
        Nama Barang:
        <input type="text" name="nama" value={barang.nama} onChange={handleChange} />
      </label>
      <label>
        Harga:
        <input type="text" name="harga" value={barang.harga} onChange={handleChange} />
      </label>
      <label>
        Jumlah:
        <input type="text" name="jumlah" value={barang.jumlah} onChange={handleChange} />
      </label>
      <label>
        Deskripsi:
        <textarea name="deskripsi" value={barang.deskripsi} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Simpan</button>
    </form>
    </div>
  );
}

export default BarangForm;
