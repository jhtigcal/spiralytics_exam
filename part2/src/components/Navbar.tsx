import React from 'react';

import logo from '../assets/logo-copy-2.png';
import menuButton from '../assets/menu-button.png';
import googleButton from '../assets/google-partner1.jpg';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="menu-items">
        <div className="menu-item">
          <p>MENU</p>
          <img className="menu-icon" src={menuButton} alt="" />
        </div>
        <div className="menu-item">
          <img src={googleButton} alt="" />
        </div>
      </div>
    </nav>
  );
}
