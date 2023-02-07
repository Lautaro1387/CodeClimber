import React, { useState } from "react";
import './styles/App.css';
import { Login } from "./components/login.jsx";
import { Register } from "./components/Register.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import { Menu } from "./components/menu.js";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Navigation>
          <Route exact path='/home' element={<Navigation />} />
          <Route exact path='/home' element={<Menu />} />
        </Navigation>
      </Routes>
    </BrowserRouter>
  );
}

export default App;