import "./login.css";

const Login = () => {
    const profile = "/assets/Profile User/profile.png";
  
    return(
     <div className="login">
      <form action="">
        <h1>Sign In</h1>
        <div className="pro">
        <img src={profile} alt="" />
        </div>
        <input type="text" placeholder="Email/Username" id="" />
        <input type="password" placeholder="password" id="" />
        <div className="link">
        <a href="http://">Forgot Password</a> <br />
        <a href="http://">dont have an account? Sign up</a>
        </div>
        <button>Login</button>
      </form>
     </div>
     
    )
   
}

export default Login;
