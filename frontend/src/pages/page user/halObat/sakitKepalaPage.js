import SakitKepala from "../../../components/user components/category/listObat/sakitKepala";
import Footer from "../../../components/layouts/Footer/footer";
import NavigationBar from "../../../components/layouts/navbar/navigationBar";

const PageSakitKepala = () => {
    return (
        <>
            <NavigationBar />
            <div className="pageSakitKepala">
                <SakitKepala />
            </div>
            <Footer />
        </>
    );
};

export default PageSakitKepala;
