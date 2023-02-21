import Sidebar from "../../layouts/sidebar/sidebar";
import TableUser from "../../user components/dataUser/dataUser";
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