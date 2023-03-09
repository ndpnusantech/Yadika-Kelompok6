import Footer from "../../../components/layouts/Footer/footer";
import NavigationBar from "../../../components/layouts/navbar/navigationBar";
import ObatDiabetes from "../../../components/user components/category/listObat/diabetes";

const PageDiabetes = () => {
  return (
    <>
      <NavigationBar />
      <div className="pageDiabetes">
        <ObatDiabetes />
      </div>
      <Footer />
    </>
  );
};

export default PageDiabetes;
