import "./login.css";
import Login from '../../components/login - register components/login'

const LoginPage = () => {

  const wallpaperLogin = {
    height: "100vh",
    backgroundImage: `url('assets/background/Frame 1.png')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  return (
    <div className="loginPage" style={wallpaperLogin}>
      <Login />
    </div>

  )

}

export default LoginPage;
