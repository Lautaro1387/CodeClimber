import React, { useState } from 'react';

export const Navigation = () => {
  const [showPopup, setShowPopup] = useState(false);

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
                  <a href="/">Log out</a>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  </nav>)
}
