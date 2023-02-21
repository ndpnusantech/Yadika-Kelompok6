import Sidebar from "../../layouts/sidebar/sidebar";
import TableUser from "../../admin components/dataUser/dataUser";
import "./style.css"

const DataUsers = () => {
    return (
        <div className="DataUsers">
            <Sidebar />
            <TableUser />
        </div>
    )
}
export default DataUsers;