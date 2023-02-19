import Footer from "../../layouts/footer/footer";
import NavigationBar from "../../layouts/navbar/navigationBar";
import Category from "../../user components/category/category";
import SemuaMacam from "../../user components/semuaMacamObat/semuaMacam";

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
