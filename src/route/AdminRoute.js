import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Dashboard from '../pages/page admin/dashboard'
import DataUsers from "../pages/page admin/dataUserPage";


const AdminRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dataUsers" element={<DataUsers />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AdminRoute