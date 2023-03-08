import NavigationBar from "../../components/layouts/navbar/navigationBar"
import CardUser from "../../components/user components/profileUser/cardUser"

const ProfileUser = () => {

    const background = {
        backgroundImage: "url('assets/background/gelombang.svg')",
        backgroundSize: "cover",
        height: "100vh"
    }


    return (
        <>
            <div className="profile-user" style={background}>
                <NavigationBar />
                <CardUser />
            </div>
        </>

    )
}

export default ProfileUser