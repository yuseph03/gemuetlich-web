import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="copywriting">
          <p>Unlock your language potential</p>
          <p>Join our interactive classes today!</p>
        </div>
      </div>
      <nav className="navigation">
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
