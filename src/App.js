import React, { useState } from "react";
import './styles/App.css';
import { Login } from "./components/login.jsx";
import { Register } from "./components/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "./components/menu.js";
import Navigation from './components/navigation.js';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Navigation>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/home' element={<Navigation />} />
          <Route exact path='/home' element={<Menu />} />
        </Navigation>
      </Routes>
    </BrowserRouter>
  );
}

export default App;