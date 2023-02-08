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
      <Routes>
          <Route path="/home" element={<Menu name="Python"/>}/>
          <Route exact path="/login" element={<Log />}/>
      </Routes>
        </div>
    </div>
  );
}

export default App;