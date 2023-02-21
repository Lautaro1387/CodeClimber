import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

export const Register = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [password2, setPass2] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || !username || !password2) {
            swal({
                title: "Please fill in all fields",
                text: "Try again",
                icon: "error",
                button: "Ok",
                buttonColor: "green",
                timer: "3500",
              });
            return;
        } else if (username.length < 5) {
            swal({
                title: "The username must have 5 characters",
                text: "Try again",
                icon: "error",
                button: "Ok",
                buttonColor: "green",
                timer: "3500",
              });
            return;
        } else if (password !== password2) {
            swal({
                title: "The passwords are different",
                text: "Try again",
                icon: "error",
                button: "Ok",
                buttonColor: "green",
                timer: "3500",
              });
            return;
        } else if (password.length < 8) {
            swal({
                title: "The password must have 8 or more characters",
                text: "Try again",
                icon: "error",
                button: "OK",
                buttonColor: "green",
                timer: "3500",
              });
            return;
        } else if (!/\d/.test(password)) {
            swal({
                title: "The password must contain at least one number",
                text: "Try again",
                icon: "error",
                button: "OK",
                buttonColor: "green",
                timer: "3500",
              });
            return;
        } else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
            swal({
                title: "The password must contain at least one special character",
                text: "Try again",
                icon: "error",
                button: "OK",
                buttonColor: "green",
                timer: "3500",
              });
            return;
        } else {
            fetch('http://127.0.0.1:8000/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                const userExists = data.some(item => item.username === username);
                const emailExists = data.some(item => item.email === email);
                if (userExists) {
                    swal({
                        title: "User already exists",
                        text: "Try again",
                        icon: "error",
                        button: "OK",
                        buttonColor: "green",
                        timer: "3500",
                        });
                    return;
                } else if (emailExists) {
                    swal({
                        title: "Email already exists",
                        text: "Try again",
                        icon: "error",
                        button: "OK",
                        buttonColor: "green",
                        timer: "3500",
                        });
                    return;
                } else {
                    return fetch('http://127.0.0.1:8000/api/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ username, email, password })
                    });
                }
            })
            .then(response => {
                if (response.ok) {
                    navigate('/home');
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Sign up</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Username</label>
                <input value={username} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Username" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="password">Repeat password</label>
                <input value={password2} onChange={(e) => setPass2(e.target.value)} type="password" placeholder="********" id="password2" name="password2" />
                <button type="submit">Sign In</button>
            </form>
            <button className="link-btn" onClick={() => window.location.href = "/login"}>Already have an account? Login here.</button>
        </div>
    )
}