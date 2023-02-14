import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Log } from './components/login-register.js';
import { Menu } from './components/menu.js';
import { Quiz } from './components/quizGame.js';
import { Rank } from './components/ranking.js';
import { data } from './js/dataRank.js';
import './styles/App.css'
import Aboutus from "./components/about.js";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Log />} />
        <Route path="/home" element={<Menu name="Python" />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/ranking" element={<Rank data={data} />} />
      </Routes>
    </div>
  );
}

export default App;