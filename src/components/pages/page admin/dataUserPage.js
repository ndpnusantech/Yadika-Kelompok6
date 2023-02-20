import TableUser from "../../user components/dataUser/dataUser";
import CollapsibleExample from "../../layouts/sidebar/sidebar";
import "./style.css"

const DataUsers = () => {
    return (
        <div className="DU">
            <CollapsibleExample/>
            <TableUser/>
        </div>
    )
}
export  default DataUsers;