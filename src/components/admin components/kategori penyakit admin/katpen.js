import "./style.css";
import Table from 'react-bootstrap/Table';

const KatPenya = () => {
  return(
    <>
    <div className="mainkatpen">
      <h2>Kategori Penyakit</h2> 
      <a className="addcateg" href="http://">Add Category</a>
      <div className="tablekatpen">
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Kategori</th>
          <th></th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td colSpan={2}>Masuk Angin</td>
          <td><a className="delcattab" href="http://">Delete</a> <a className=" editcattab" href="http://">Edit</a> </td>

        </tr>
        
       
      </tbody>
    </Table>
      </div>
    </div>
    </>
  )
}

export default KatPenya;