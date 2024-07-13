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
        <a href="/aboutus">About Us</a>
        <a href="/socials">Socials</a>
        <a href="/articles">Articles</a>
      </nav>
    </header>
  );
}

export default Header;
