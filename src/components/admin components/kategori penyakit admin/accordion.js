
import './style.css';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    // <button
    //   type="button"
    //   style={{ backgroundColor: 'white' }}
    //   onClick={decoratedOnClick}
    //   className='butonaccor'
    // >
    //   {children}
    // </button>
    <h5 onClick={decoratedOnClick} className='butonaccor'>{children}</h5>
  );
}

function Example() {
  return (
    <div className='bodyCat'>
        <h2>Kategori penyakit</h2>
        <div className='MainCatob'>
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0"> <img className='judulicon' src="assets/category obat/masukAngin.png" alt="" /> Masuk Angin</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
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
          <td><img className='tabelimg' src="assets/obat/Eye auto drop 1.png" alt="" /></td>
          <td>eye auto drop</td>
          <td>cair</td>
          <td>sakit mata</td>
          <td>10</td>
        </tr>
        
        
      </tbody>
    </Table>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">  <img className='judulicon' src="assets/category obat/sakitGigi.png" alt="" />Sakit Gigi</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="2"> <img className='judulicon' src="assets/category obat/batukPilek.png" alt="" />batuk dan pilek</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="3"> <img className='judulicon' src="assets/category obat/demam.png" alt="" />demam</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="4"> <img className='judulicon' src="assets/category obat/sakitMata.png" alt="" />sakit mata</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="5"> <img className='judulicon' src="assets/category obat/sariawan.png" alt="" />sariawan</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="6"> <img className='judulicon' src="assets/category obat/alergi.png" alt="" />alergi</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="7">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="7"> <img className='judulicon' src="assets/category obat/cacar.png" alt="" />cacar</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="7">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="8"> <img className='judulicon' src="assets/category obat/asma.png" alt="" />asma</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="8">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="9"> <img className='judulicon' src="assets/category obat/p3k.png" alt="" />P3K</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="9">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="10"> <img className='judulicon' src="assets/category obat/antiseptik.png" alt="" />antiseptik</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="10">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="11"> <img className='judulicon' src="assets/category obat/diabetes.png" alt="" />diabetes</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="11">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="12"> <img className='judulicon' src="assets/category obat/sakitKepala.png" alt="" />Sakit kepala</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="12">
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </Card>


    </Accordion>


    </div>
    </div>
  );
}

export default Example

