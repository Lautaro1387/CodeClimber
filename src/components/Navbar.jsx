import React from 'react';

export const Navigation = () => {
  return (
  <nav className="navbar">
    <div class="circle">
      <a href="home"> 
      </a>
    </div>
    <div>
      <ul className="nav-links">
        <li><a href="quiz"><i class="fa-sharp fa-solid fa-book"></i></a></li>
        <li><a href="ranking"><i class="fa-solid fa-trophy"></i></a></li>
        <li><a href="profile"><i class="fa-solid fa-user"></i></a></li>
      </ul>
    </div>
  </nav>)
}

export default Navigation;