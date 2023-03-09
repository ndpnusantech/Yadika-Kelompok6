// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Popup from "./components/user components/popup/popup";
import AdminRoute from "./route/AdminRoute";
import UserRoute from "./route/UserRoute";




function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<LoginPage />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/obat" element={<Obat />} />
    //     <Route path="/riwayat" element={<RiwayatPage />} />
    //     <Route path="/keranjang" element={<KeranjangPage />} />
    //     <Route path="/profile" element={<ProfileUser />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/dataUsers" element={<DataUsers />} />
    //     <Route path="/contact" element={<ContactPage />} />
    //     <Route path="/detailObat" element={<DetailPage />} />
    //     <Route path="/pesanan" element={<PagePesananSaya />} />
    //     <Route path="/rincianPesanan" element={<PageRincian />} />
    //     <Route path="/p" element={<Popup />} />
    <>
      <UserRoute />
      <AdminRoute />
    </>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
