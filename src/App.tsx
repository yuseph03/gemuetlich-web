import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
