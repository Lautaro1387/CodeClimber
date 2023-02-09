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
        <li><a href="quiz.html"><i class="fa-sharp fa-solid fa-book"></i></a></li>
        <li><a href="ranking.html"><i class="fa-solid fa-trophy"></i></a></li>
        <li><a href="profile.html"><i class="fa-solid fa-user"></i></a></li>
      </ul>
    </div>
  </nav>)
}
