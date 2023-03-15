import "./administator.css";

const LoginAdmin = () => {
    const profile = "/assets/Profile User/Group 83.svg";

    return (
        <div className="box-1 mx-auto mt-5">
            <div className="img">
                <img src={profile} alt="" width="130px" />
            </div>
            <h3>Admin</h3>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
            </form>
            <button>Sign Up</button>
        </div>
    );
};

export default LoginAdmin;