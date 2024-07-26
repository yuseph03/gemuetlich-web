import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  
  return (
    <header className="header">
      <img src="src/assets/white-logo.svg" alt="Logo" className="logo"/>
     
      <nav className="navigation">
        <a href="/about"> 😎 About Us</a>
        <a href="/social"> 📩 Socials</a>
        <a href="/blog"> 📚 Blog</a>
      </nav>
    </header>
  );
}

export default Header;
