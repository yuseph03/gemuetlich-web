import React from 'react';
import './Socials.css';

const Socials: React.FC = () => {
  return (
    <div className="socials-page">
      <main className="main">
        <section className="socials-section">
          <h2>📩 Connect with Us</h2>
          <div className="socials-grid">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <img src="discord-logo.svg" alt="Discord" />
              <span>Discord &#x1F4AC;</span>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <img src="telegram-logo.svg" alt="Telegram" />
              <span>Telegram &#x1F4E7;</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="youtube-logo.svg" alt="YouTube" />
              <span>YouTube &#x1F4FA;</span>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <img src="tiktok-logo.svg" alt="TikTok" />
              <span>TikTok &#x1F3A4;</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="instagram-logo.svg" alt="Instagram" />
              <span>Instagram &#x1F4F8;</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Socials;
