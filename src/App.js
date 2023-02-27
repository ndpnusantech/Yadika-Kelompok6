import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/page user/home";
import Obat from "./pages/page user/obat";
import Dashboard from "./pages/page admin/dashboard";
import DataUsers from "./pages/page admin/dataUserPage";
import RegisterPage from "./pages/login-register/registerPage";
import LoginPage from "./pages/login-register/loginPage";
import RiwayatPage from "./pages/page user/riwayat";
import KeranjangPage from "./pages/page user/keranjang";
import ProfileUser from "./pages/page user/profileUser";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/obat" element={<Obat />} />
        <Route path="/riwayat" element={<RiwayatPage />} />
        <Route path="/keranjang" element={<KeranjangPage />} />
        <Route path="/profile" element={<ProfileUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dataUsers" element={<DataUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
