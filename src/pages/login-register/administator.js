import LoginAdmin from '../../components/login - register components/admin login/administrator'

const LoginAdminPage = () => {
    const wallpaperLogin = {
        height: "100vh",
        backgroundImage: `url('assets/background/gelombang bawah.svg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }

      return (
        <div className="LoginAdminPage">
          <LoginAdmin />
        </div>
    
      )
}

export default LoginAdminPage;
