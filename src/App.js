import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/page user/home";
import Obat from "./components/pages/page user/obat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/obat" element={<Obat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
