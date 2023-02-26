import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();
    const { setUsername, setPoints } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("user:" + user);
        if (!user)
            return;
        fetch('http://127.0.0.1:8000/api/users', {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
        }
        })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                throw new Error('HTTP error ' + response.status);
            }
            })
        .then(data => {
            console.log(data);
            const userExists = data.find((i) => i.username === user);
            if (!user || !pass) {
                swal({
                    title: "Please fill in all fields",
                    text: "Try again",
                    icon: "error",
                    button: "Ok",
                    timer: "3500",
                  });
                return;
            } else if (!userExists) {
                swal({
                    title: "User doesn't exists",
                    text: "Try again",
                    icon: "error",
                    button: "Ok",
                    timer: "3500",
                  });
                return;
            } else {
                if (userExists.password !== pass) {
                    swal({
                        title: "User and password doesn't match",
                        text: "Try again",
                        icon: "error",
                        button: "Ok",
                        timer: "3500",
                      });
                    return;
                } else {
                    console.log("login accepted")
                    setUsername(userExists.username);
                    setPoints(0);
                    navigate("/home")
                }
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
    return (
        <div className="auth-form-container">
            <img src={require('../images/Logo.png')} className="login-logo"/>
            <h2> Code Climber</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="user">User</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="user" placeholder="Enter your user" id="user" name="user" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit"> Log In </button>
            </form>
            <button className="link-btn" onClick={() => window.location.href = "/signup"}>Don't have an account? Register here.</button>
        </div>
    )
}
