import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  
  return (
    <header className="header">
      <img src="src/assets/white-logo.svg" alt="Logo" className="logo"/>
      <div className="copywriting">
          <p>Unlock your language potential</p>
          <p>Join our online classes today!</p>
      </div>
      <nav className="navigation">
        <a href="/about"> 😎 About Us</a>
        <a href="/social"> 📩 Socials</a>
        <a href="/blog"> 📚 Blog</a>
      </nav>
    </header>
  );
}

export default Header;
