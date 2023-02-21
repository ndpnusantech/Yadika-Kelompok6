import Sidebar from "../../components/layouts/sidebar/sidebar";
import TableUser from "../../components/admin components/dataUser/dataUser";
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