import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  // Si la ubicación actual es Log o Quiz, no se mostrará la barra de navegación.
  if (location.pathname === '/quiz/html/1' || location.pathname === '/quiz/html/2' || location.pathname === '/quiz/html/3' || location.pathname === '/quiz/css/1' || location.pathname === '/quiz/css/2' || location.pathname === '/quiz/css/3' || location.pathname === '/') {
    return null;
  }
  const handleProfileClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className="navbar">
    <div class="circle">
      <a href="home">
        <img
          src={require('../images/CodeClimber.jpg')}
          alt="Logo"
          className="logo"
        />
      </a>
    </div>
    <div>
      <ul className="nav-links">
        <li>
          <a href="quiz"><i class="fa-sharp fa-solid fa-book"></i></a>
        </li>
        <li>
          <a href="ranking"><i class="fa-solid fa-trophy"></i></a>
        </li>
        <li><a href="#" onClick={handleProfileClick}><i class="fa-solid fa-user"></i></a>
          {showPopup && (
            <div className="popup">
              <ul className="popup-links">
                <li>
                  <a href="profile">Profile</a>
                </li>
                <li>
                  <a href="aboutus">About us</a>
                </li>
                <li>
                  <a href="/login">Log out</a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  </nav>)
}
