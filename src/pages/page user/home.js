import NavigationBar from "../../components/layouts/navbar/navigationBar";
import HeroSection from "../../components/user components/heroSection/hero-section";

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
