import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/header'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Progress_bar from './Components/Progress_bar';



function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <br />
      <Banner /> 
      <br />
      <About />
      <br />
      <hr />
      <h1 className="skillheader">My SKills</h1>
      <hr />
      <Project />
      <hr />
      <h1 id="contactnav" className="contact">My medals</h1>
      <hr />
      <Contact />
      <Progress_bar/>
      <br />
      <hr />



    </div>
  );
}

export default App;
