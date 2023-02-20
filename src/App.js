import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/page user/home";

import Obat from "./components/pages/page user/obat";
import Dashboard from "./components/pages/page admin/dashboard";
import DataUsers from "./components/pages/page admin/dataUserPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/obat" element={<Obat />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dataUsers" element={<DataUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
