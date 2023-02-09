import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/navigation.js';
import { Log } from './components/login-register.js'
import { Menu } from './components/menu.js'
import MainQuiz from './components/quiz.js'
import './styles/styles-comp/menu.css'

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/home" element={<Menu name="Python" />} />
        <Route exact path="/" element={<Log />} />
        <Route path="/quiz" element={<MainQuiz />} />
      </Routes>
    </div>
  );
}

export default App;