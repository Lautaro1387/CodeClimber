import React, { useState } from "react";
import '../styles/App.css';
import { Login } from "./login.js";
import { Register } from "./register.js";


export const Log = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  );
}