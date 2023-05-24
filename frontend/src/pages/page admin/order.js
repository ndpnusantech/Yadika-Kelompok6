import Order from "../../components/admin components/order/order";
import Sidebar from "../../components/layouts/sidebar/sidebar";

const OrderPage = () => {
    return(
        <div className="order">
            <Sidebar />
            <Order />
        </div>
    );
};

export default OrderPage;