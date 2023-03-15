import SakitGigi from "../../../components/user components/category/listObat/sakitGigi";
import Footer from "../../../components/layouts/Footer/footer";
import NavigationBar from "../../../components/layouts/navbar/navigationBar";

const PageSakitGigi = () => {
    return (
        <>
            <NavigationBar />
            <div className="pageSakitGigi">
                <SakitGigi />
            </div>
            <Footer />
        </>
    );
};

export default PageSakitGigi;
