import MasukAngin from "../../../components/user components/category/listObat/masukAngin";
import Footer from "../../../components/layouts/Footer/footer";
import NavigationBar from "../../../components/layouts/navbar/navigationBar";

const PageMasukAngin = () => {
    return (
        <>
            <NavigationBar />
            <div className="pageMasukAngin">
                <MasukAngin />
            </div>
            <Footer />
        </>
    );
};

export default PageMasukAngin;
