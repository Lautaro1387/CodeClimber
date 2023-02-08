import React from "react";
import { Route, Routes} from 'react-router-dom';
import {Navigation} from './components/navigation.js';
import {Log} from './components/login-register.jsx'
import {Menu} from './components/menu.js'


const App = () => {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;