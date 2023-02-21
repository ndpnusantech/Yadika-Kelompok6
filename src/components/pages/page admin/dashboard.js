import BoxDetail from "../../admin component/boxDetail/boxDetail/boxDetail";
import Sidebar from "../../layouts/sidebar/sidebar";
import "./style.css";


const Dashboard = () => {
    return (

        <div className="dashboard">
            <Sidebar />
            <BoxDetail />
        </div>

    );

}

export default Dashboard