import React from 'react';
import '../../styles/header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <h1>BlogSpace</h1>
        </div>
        <div className="nav-links">
          <a href="#" className="nav-link">Our Story</a>
          <a href="#" className="nav-link">Write</a>
          <a href="#" className="nav-link">Sign In</a>
          <button className="get-started-btn">Get Started</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;