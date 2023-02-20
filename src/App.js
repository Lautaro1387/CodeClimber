import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Log } from './components/login-register.js';
import { Menu } from './components/menu.js';
import { Quiz } from './components/quizGame.js';
import { Rank } from './components/ranking.js';
import { data } from './js/dataRank.js';
import { Profile } from './components/profile.js';
import Aboutus from "./components/about.js";
import './styles/App.css'


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Log />} />
        <Route path="/home" element={<Menu name="Python" />} />
        <Route path="/quiz/html/1" element={<Quiz />} />
        <Route path="/quiz/html/2" element={<Quiz />} />
        <Route path="/quiz/html/3" element={<Quiz />} />
        <Route path="/quiz/css/1" element={<Quiz />} />
        <Route path="/quiz/css/2" element={<Quiz />} />
        <Route path="/quiz/css/3" element={<Quiz />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ranking" element={<Rank data={data} />} />
      </Routes>
    </div>
  );
}

export default App;
