import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginAdminPage from '../pages/login-register/administator';
import Dashboard from '../pages/page admin/dashboard'
import DataUsers from "../pages/page admin/dataUserPage";
import StorageP from '../pages/page admin/storage';
import OrderPage from '../pages/page admin/order';


const AdminRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/administrator" element={<LoginAdminPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dataUsers" element={<DataUsers />} />
                <Route path="/storage" element={<StorageP />} />
                <Route path="/order" element={<OrderPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoute;