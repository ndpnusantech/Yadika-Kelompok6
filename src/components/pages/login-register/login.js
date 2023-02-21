import "./login.css";

const Login = () => {
    const profile = "/assets/Profile User/profile.png";

    const wallpaperLogin = {
      height: "100vh",
      backgroundImage: `url('assets/background/Frame 1.png')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
  }
  
    return(
     <div className="login" style={wallpaperLogin}>
      <form>
        <h1>Sign In</h1>
        <div className="pro">
        <img src={profile} alt="profile" />
        </div>
        <input type="text" placeholder="Email/Username" id="" />
        <input type="password" placeholder="password" id="" />
        <div className="link">
        <a href="/forgot">Forgot Password</a> <br />
        <a href="/register">dont have an account? Sign up</a>
        </div>
        <button>Login</button>
      </form>
     </div>
     
    )
   
}

export default Login;
