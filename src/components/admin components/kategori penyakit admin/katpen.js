
import React, { useState } from 'react';
import './style.css';
import Table from 'react-bootstrap/Table';

function CollapsibleSection() {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    setOpenSection((prevOpenSection) => {
      if (prevOpenSection === section) {
        return null; // close the section if it is already open
      } else {
        return section; // open the clicked section
      }
    });
  };

  return (
    <div className='bodyCat'>
        <h2>Kategori Obat</h2>
    <div className="MainCatob">
      <h1 onClick={() => handleToggle('masukAngin')}>
        {openSection === 'masukAngin' ? 'Masuk Angin' : 'Masuk Angin'}
      </h1>
      {openSection === 'masukAngin' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}

      <h1 onClick={() => handleToggle('sakitGigi')}>
        {openSection === 'sakitGigi' ? 'Sakit Gigi' : 'Sakit Gigi'}
      </h1>
      {openSection === 'sakitGigi' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('BatukPilek')}>
        {openSection === 'BatukPilek' ? 'Batuk & Pilek' : 'Batuk & Pilek'}
      </h1>
      {openSection === 'BatukPilek' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('demam')}>
        {openSection === 'demam' ? 'Demam' : 'Demam'}
      </h1>
      {openSection === 'demam' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('sakitmata')}>
        {openSection === 'sakitmata' ? 'Sakit Mata' : 'Sakit Mata'}
      </h1>
      {openSection === 'sakitmata' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('sariawan')}>
        {openSection === 'sariawan' ? 'sariawan' : 'sariawan'}
      </h1>
      {openSection === 'sariawan' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('alergi')}>
        {openSection === 'alergi' ? 'alergi' : 'alergi'}
      </h1>
      {openSection === 'alergi' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('cacar')}>
        {openSection === 'cacar' ? 'cacar' : 'cacar'}
      </h1>
      {openSection === 'cacar' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('asma')}>
        {openSection === 'asma' ? 'asma' : 'asma'}
      </h1>
      {openSection === 'asma' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('p3k')}>
        {openSection === 'p3k' ? 'p3k' : 'p3k'}
      </h1>
      {openSection === 'p3k' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('antiseptik')}>
        {openSection === 'antiseptik' ? 'antiseptik' : 'antiseptik'}
      </h1>
      {openSection === 'antiseptik' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('diabetes')}>
        {openSection === 'diabetes' ? 'diabetes' : 'diabetes'}
      </h1>
      {openSection === 'diabetes' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      <h1 onClick={() => handleToggle('sakitkepala')}>
        {openSection === 'sakitkepala' ? 'sakit kepala' : 'sakit kepala'}
      </h1>
      {openSection === 'sakitkepala' && (
        <div>
          
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>image</th>
          <th>product name</th>
          <th>jenis obat</th>
          <th>kategori penyakit</th>
          <th>stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
        </div>
      )}
      
      
    </div>
    </div>
  );
}

export default CollapsibleSection;


