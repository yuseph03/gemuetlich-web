import React from 'react';
import './MainSection.css';

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
      <img src="src/assets/english.png" alt="English" className="english" />
      <img src="src/assets/german.png" alt="German" className="german" />
    </main>
  );
}

export default MainSection;

