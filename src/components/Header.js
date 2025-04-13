// src/components/Header.js
import React from 'react';
import LanguageSelector from './LanguageSelector';
import '../App.css';

const Header = () => {
  console.log('Header component rendered'); // デバッグ用ログ

  return (
    <header className="header">
      <div className="logo">
        <img
          src="/assets/synova-logo.png"
          alt="SYNOVA WHISPER Logo"
          onError={(e) => {
            console.error('Failed to load logo image:', e.target.src);
            e.target.src = '/assets/fallback-image.jpg'; // フォールバック画像
          }}
          style={{ height: '70px' }}
        />
      </div>
      <div className="menu-container">
        <nav className="menu">
          {[
            { href: '#home', label: 'Home' },
            { href: '#mission', label: 'Mission' },
            { href: '#team', label: 'Team' },
            { href: '#super-intelligence', label: 'SuperIntelligence' },
            { href: '#projects', label: 'Projects' },
            { href: '#applications', label: 'Applications' },
            { href: '#growth-model', label: 'GrowthModel' },
            { href: '#ethics', label: 'Ethics' },
            { href: '#structure', label: 'Structure' },
            { href: '#future', label: 'Future' },
            { href: '#patent', label: 'Patent' },
            { href: '#invest', label: 'Invest' },
            { href: '#contact', label: 'Contact' },
          ].map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default React.memo(Header); // パフォーマンス最適化
