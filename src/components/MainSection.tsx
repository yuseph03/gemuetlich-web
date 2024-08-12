import React, { useState } from 'react';
import GermanCards from './pages/Products/GermanCards';
import EnglishCards from './pages/Products/EnglishCards';
import './MainSection.css';

const MainSection: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleGermanClick = () => {
    setSelectedLanguage('german');
  }

  const handleEnglishClick = () => {
    setSelectedLanguage('english');
  }

  return (
    <main className="main">
      <div className="language-select">
        <div onClick={handleEnglishClick} className="product-card-select english">
          <h2>🇺🇸 🦅 🍔</h2>
          <p>Learn English with us!</p>
        </div>
        <div onClick={handleGermanClick} className="product-card-select german">
          <h2>🇩🇪 🥨 🍻</h2>
          <p>Lerne Deutsch mit uns!</p>
        </div>
        <img src="src/assets/english.png" alt="English" className="english" />
        <img src="src/assets/german.png" alt="German" className="german" />
      </div>
      {selectedLanguage === 'german' ? <GermanCards /> : <EnglishCards /> }
    </main>
  );
}

export default MainSection;

