import Register from "../../login - register components/register"
import '../style/style.css'

const RegisterPage = () => {

    const wallpaperRegist = {
        height: "100vh",
        backgroundImage: `url('assets/background/Frame 1.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }

    return (
        <div className="registerPage pt-3" style={wallpaperRegist}>
            <Register />
        </div>
    )
}

export default RegisterPage