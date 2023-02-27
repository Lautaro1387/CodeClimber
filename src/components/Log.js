import React, { useState } from "react";
import '../styles/App.css';
import { Login } from "./Login.js";
import { Register } from "./Register.js";


export const Log = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  );
}