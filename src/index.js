import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';
import {Navigation} from './components/navigation.js';
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <BrowserRouter>
      <Navigation/>
        <App />
    </BrowserRouter>
  </div>
)