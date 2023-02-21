import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/page user/home";
import Obat from "./pages/page user/obat";
import Dashboard from "./pages/page admin/dashboard";
import DataUsers from "./pages/page admin/dataUserPage";
import RegisterPage from "./pages/login-register/registerPage";
import Login from "./pages/login-register/login";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />

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
