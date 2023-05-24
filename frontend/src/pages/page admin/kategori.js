import Sidebar from "../../components/layouts/sidebar/sidebar";
import Kategori from "../../components/admin components/kategoriObat/kategori";

const KategoriPage = () =>{
    return(
        <div className="kategori">
            <Sidebar/>
            <Kategori/>
        </div>
    )
}

export default KategoriPage;