import "./administator.css";
import { Form } from "react-bootstrap";

const LoginAdmin = () => {
    const profile = "/assets/Profile User/Group 83.svg";
    
    const handleSubmit=(e) => {
        e.preventDefault()
        const username=e.target.username.value
        const password=e.target.password.value

        if (username=="Admin123" && password=="Healtify") {
            window.open("/dashboard","_self") 
        } else {
            alert("Username dan password salah")
        }
    }
    

    return (
        <div className="box-1 mx-auto mt-5">
            <div className="img">
                <img src={profile} alt="" width="130px" />
            </div>
            <h3>Admin</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Control name="username" type="text" placeholder="Username" />
                <Form.Control name="password" type="password" placeholder="Password" />
                <button>Sign Up</button>
            </Form>
            
        </div>
    );
};

export default LoginAdmin;