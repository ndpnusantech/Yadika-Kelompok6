import NavigationBar from "../../layouts/navbar/navigationBar";
import HeroSection from "../../user components/heroSection/hero-section";
import './style.css'
const Home = () => {
  return (
    <div className="home">
      <NavigationBar />
      <HeroSection />
    </div>
  );
};

export default Home;
