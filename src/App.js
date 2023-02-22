import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/login.js';
import { Register } from './components/register.js';
import { Menu } from './components/menu.js';
import { Quiz } from './components/quizGame.js';
import { Rank } from './components/ranking.js';
import { data } from './components/dataRank.js';
import { Profile } from './components/profile.js';
import Aboutus from "./components/about.js";
import Circles from "./components/rutaQuiz.js";
import './App.css'


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<Menu name="Python" />} />
        <Route path="/quiz/:category/:page" element={<Quiz />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quiz" element={<Circles />} />
        <Route path="/ranking" element={<Rank data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
