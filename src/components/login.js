import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
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
            let userExists = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i].username === user) {
                    userExists = true;
                    console.log(userExists);
                    if (data[i].password === pass) {
                        console.log("User exists and password matches");
                        navigate('/home');
                    } else {
                        alert("Password and user doesn't match");
                        console.log("Password doesn't match");
                    }
            }
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
    }
    return (
        <div className="auth-form-container">

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
