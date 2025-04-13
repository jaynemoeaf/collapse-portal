// src/components/Header.js
import React from 'react';
import LanguageSelector from './LanguageSelector';
import '../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/synova-logo.png" alt="SYNOVA WHISPER Logo" onError={(e) => {
          console.error('Failed to load logo image:', e.target.src);
          e.target.src = '/assets/fallback-image.jpg'; // フォールバック画像
        }} />
      </div>
      <div className="menu-container">
        <nav className="menu">
          <a href="#home">Home</a>
          <a href="#mission">Mission</a>
          <a href="#team">Team</a>
          <a href="#super-intelligence">SuperIntelligence</a>
          <a href="#projects">Projects</a>
          <a href="#applications">Applications</a>
          <a href="#growth-model">GrowthModel</a>
          <a href="#ethics">Ethics</a>
          <a href="#structure">Structure</a>
          <a href="#future">Future</a>
          <a href="#patent">Patent</a>
          <a href="#invest">Invest</a>
          <a href="#contact">Contact</a>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
