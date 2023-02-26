import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { QuizGame } from './components/QuizGame.js';
import { Rank } from './components/Rank.js';
import { data } from './components/dataRank.js';
import { Profile } from './components/Profile.js';
import { Quizroute } from "./components/QuizRoute.js";
import { Landing } from "./components/landing.js";
import Aboutus from "./components/Aboutus.js";
import { AuthProvider } from './contexts/AuthContext.js';

import './App.css'


const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/quiz/:category/:pagination" element={<QuizGame />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Quizroute />} />
          <Route path="/" element={<Landing />} />
          <Route path="/ranking" element={<Rank data={data} />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
