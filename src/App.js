import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Log } from './components/login-register.js';
import { Menu } from './components/menu.js';
import { Quiz } from './components/quizGame.js';
import { Rank } from './components/ranking.js';
import { data } from './js/dataRank.js';
import Aboutus from "./components/about.js";
import './styles/App.css'
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import Project from './components/Project';
import UserProfile from './components/UserProfile';

const App = () => {
  const [username, setUsername] = useState('John Doe');

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/home" element={<Menu name="Python" />} />
        <Route path="/quiz/html/1" element={<Quiz />} />
        <Route path="/quiz/html/2" element={<Quiz />} />
        <Route path="/quiz/html/3" element={<Quiz />} />
        <Route path="/quiz/css/1" element={<Quiz />} />
        <Route path="/quiz/css/2" element={<Quiz />} />
        <Route path="/quiz/css/3" element={<Quiz />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ranking" element={<Rank data={data} />} />
        <Route path="/" element={<Banner username={username} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/progress" element={<ProgressBar />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/profile" element={<UserProfile onUsernameChange={handleUsernameChange} />} />
      </Routes>
    </div>
  );
}

export default App;
