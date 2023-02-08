import React from 'react';

export const Navigation = () => {
  return (
  <nav className="navbar">
    <div class="circle">
      <a href="index.html"> 
        <img src={require('../images/logo.png')} alt="Logo" className="logo"/>
      </a>
    </div>
    <div>
      <ul className="nav-links">
        <li><a href="quiz.html">Quiz</a></li>
        <li><a href="ranking.html">Ranking</a></li>
        <li><a href="profile.html">Profile</a></li>
      </ul>
    </div>
  </nav>)
}
