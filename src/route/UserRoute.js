import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/login-register/loginPage'
import RegisterPage from "../pages/login-register/registerPage";
import Home from "../pages/page user/home";
import Obat from "../pages/page user/obat";
import ContactPage from "../pages/page user/contactPage";
import RiwayatPage from "../pages/page user/riwayat";
import ProfileUser from "../pages/page user/profileUser";
import DetailPage from "../pages/page user/detail";
import PagePesananSaya from "../pages/page user/pesananSayaPage";
import KeranjangPage from "../pages/page user/keranjang";
import PageRincian from "../pages/page user/rincianPage";
import PageDiabetes from '../pages/page user/halObat/diabetesPage'
import PageSakitMata from '../pages/page user/halObat/sakitMataPage'
import PageSakitKepala from '../pages/page user/halObat/sakitKepalaPage';
import IdPesananPage from '../pages/page user/IdPesananPage';
import PageMasukAngin from '../pages/page user/halObat/masukAnginPage';
import PageSakitGigi from '../pages/page user/halObat/sakitGigiPage';
import InputFilePage from '../pages/page user/inputFile';


const UserRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/obat" element={<Obat />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/riwayat" element={<RiwayatPage />} />
                <Route path="/profile" element={<ProfileUser />} />
                <Route path="/keranjang" element={<KeranjangPage />} />
                <Route path="/detailObat" element={<DetailPage />} />
                <Route path="/pesananSaya" element={<PagePesananSaya />} />
                <Route path="/idPesanan" element={<IdPesananPage />} />
                <Route path="/rincianPesanan" element={<PageRincian />} />
                <Route path="/inputFile" element={<InputFilePage />} />
                <Route path="/diabetes" element={<PageDiabetes />} />
                <Route path="/sakitMata" element={<PageSakitMata />} />
                <Route path="/sakitKepala" element={<PageSakitKepala />} />
                <Route path="/masukAngin" element={<PageMasukAngin />} />
                <Route path="/sakitGigi" element={<PageSakitGigi />} />
            </Routes>
        </BrowserRouter>
    )
}

export default UserRoute