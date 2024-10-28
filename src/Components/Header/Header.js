// components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Dribbble</div>
      <nav className="nav-links">
        <ul>
          <li>Explore</li>
          <li>Inspiration</li>
          <li>Sign In</li>
          <li className="signup-btn">Sign Up</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
