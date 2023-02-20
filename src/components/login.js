import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        if (!user)
            return;
        navigate('/home')
    }

    return (
        <div className="auth-form-container">

            <h2> Code Climber</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="user">User</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} type="user" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit"> Log In </button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
