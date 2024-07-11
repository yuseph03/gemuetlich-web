import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo"/>
      <div className="copywriting">
          <p>Unlock your language potential</p>
          <p>Join our interactive classes today!</p>
      </div>
      <nav className="navigation">
        <a href="#about">About Us</a>
        <a href="#contact">Socials</a>
        <a href="#articles">Articles</a>
      </nav>
    </header>
  );
}

export default Header;
