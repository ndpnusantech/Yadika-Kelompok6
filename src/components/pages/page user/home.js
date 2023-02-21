import NavigationBar from "../../layouts/navbar/navigationBar";
import HeroSection from "../../user components/heroSection/hero-section";
import '../style/style.css'

const Home = () => {

  const wallpaperHome = {
    height: '100vh',
    backgroundImage: `url(/assets/background/gelombang.svg)`,
    backgroundSize: 'cover'

  }

  return (
    <div className="home" style={wallpaperHome}>
      <NavigationBar />
      <HeroSection />
    </div>
  );
};

export default Home;
