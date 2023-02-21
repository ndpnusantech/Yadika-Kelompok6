import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from './pages/login-register/registerPage'
import Home from './pages/page user/home'
import Obat from './pages/page user/obat'
import Dashboard from './pages/page admin/dashboard'
import DataUsers from './pages/page admin/dataUserPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />

        <Route path="/obat" element={<Obat />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dataUsers" element={<DataUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
