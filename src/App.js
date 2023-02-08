import React from "react";
import { Route, Routes} from 'react-router-dom';
import {Navigation} from './components/navigation.js';
import {Log} from './components/login-register.jsx'
import {Menu} from './components/menu.js'
import './styles/styles-comp/menu.css'

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="App">
        <Menu title="Code Climber" name="Python"/>
      </div>
    </div>
  );
}

export default App;