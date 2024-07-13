import React from 'react';
import './MainSection.css';
import english from '../assets/english.png';
import german from '../assets/german.png'

const MainSection: React.FC = () => {
  return (
    <main className="main">
      <div className="product-card english">
        <h2>🇺🇸 🦅 🍔</h2>
        <p>Learn English with us!</p>
      </div>
      <div className="product-card german">
        <h2>🇩🇪 🥨 🍻</h2>
        <p>Lerne Deutsch mit uns!</p>
      </div>
      <img src={english} alt="English" className="english" />
      <img src={german} alt="German" className="german" />
    </main>
  );
}

export default MainSection;

