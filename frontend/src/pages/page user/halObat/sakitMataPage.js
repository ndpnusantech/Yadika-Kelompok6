import SakitMata from "../../../components/user components/category/listObat/sakitMata";
import Footer from "../../../components/layouts/Footer/footer";
import NavigationBar from "../../../components/layouts/navbar/navigationBar";

const PageSakitMata = () => {
    return (
        <>
            <NavigationBar />
            <div className="pageSakitMata">
                <SakitMata />
            </div>
            <Footer />
        </>
    );
};

export default PageSakitMata;
