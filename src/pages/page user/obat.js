import Footer from "../../components/layouts/Footer/footer";
import NavigationBar from "../../components/layouts/navbar/navigationBar";
import Category from "../../components/user components/category/category";
import SemuaMacam from "../../components/user components/semuaMacamObat/semuaMacam";
import '../style/style.css'

const Obat = () => {
  return (
    <div className="obat">
      <NavigationBar />
      <Category />
      <SemuaMacam />
      <Footer />
    </div>
  );
};

export default Obat;
