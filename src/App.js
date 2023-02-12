import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Log } from './components/login-register.js';
import { Menu } from './components/menu.js';
import {Quiz} from './components/quizGame.js';
import './styles/App.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Log />} />
        <Route path="/home" element={<Menu name="Python" />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;