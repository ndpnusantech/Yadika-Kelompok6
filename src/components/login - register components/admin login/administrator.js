import "./administator.css";
import { Form } from "react-bootstrap";
import { useState } from 'react'
import Success from "../../success animation/success";
import { AnimationAOS } from "../../../AnimationAOS";

const LoginAdmin = () => {
    const profile = "/assets/Profile User/Group 83.svg";
    const [usernameInput, setUsernameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [isError, setIsError] = useState(false)
    const [isValid, setIsValid] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleInputChange = (e) => {
        const username = e.target.name === "username" ? e.target.value : usernameInput;
        const password = e.target.name === "password" ? e.target.value : passwordInput;

        if (username === "Admin123" && password === "Healtify") {
            setIsError(false);
            setIsValid(true);
            e.target.classList.remove("invalid");
            e.target.classList.add("valid");
        } else if (password === "Healtify") {
            setIsError(true);
            setIsValid(false);
            e.target.classList.remove("valid");
            e.target.classList.add("invalid");
        } else {
            setIsError(true);
            setIsValid(false);
            e.target.classList.remove("valid");
            e.target.classList.add("invalid");
        }

        if (!username || !password) {
            setIsError(false);
            setIsValid(false);
            e.target.classList.remove("valid");
            e.target.classList.remove("invalid");
        }

        setUsernameInput(username);
        setPasswordInput(password);
    };


    const inputStyle = isError ? { outline: "3px solid red" } : isValid ? { outline: "3px solid green" } : {}

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isValid) {
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 2000);
            setTimeout(() => {
                window.open("/dashboard", "_self")
            }, 2000);
        }
    }
<<<<<<< HEAD
=======

    AnimationAOS()
>>>>>>> 915f29863dd1a50df2bded8c3080964f4ca1f7db

    return (
        success ? (<Success success="Success Login Admin" />) : (
            <div className="box-1 mx-auto" data-aos="zoom-in">
                <div className="img">
                    <img src={profile} alt="" width="130px" />
                </div>
                <h3>Admin</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Control name="username" type="text" placeholder="Username" style={inputStyle} value={usernameInput} onChange={handleInputChange} required />
                    <Form.Control name="password" type="password" placeholder="Password" style={inputStyle} value={passwordInput} onChange={handleInputChange} required />
                    <button>Login Administrator</button>
                </Form>
            </div>
        )
    );
};

export default LoginAdmin;
