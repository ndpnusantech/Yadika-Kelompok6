import Footer from "../../layouts/Footer/footer";
import NavigationBar from "../../layouts/navbar/navigationBar";
import Category from "../../user components/category/category";
import SemuaMacam from "../../user components/semuaMacamObat/semuaMacam";
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
