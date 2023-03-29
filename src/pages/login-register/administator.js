import LoginAdmin from '../../components/login - register components/admin login/administrator'

const LoginAdminPage = () => {
  const wallpaperLogin = {
    height: "100vh",
    backgroundImage: `url('assets/background/gelombang.svg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  return (
    <div className="LoginAdminPage pt-5" style={wallpaperLogin}>
      <LoginAdmin />
    </div>

  )
}

export default LoginAdminPage;
