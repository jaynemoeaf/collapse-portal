// src/components/SuperIntelligence.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const SuperIntelligence = () => {
  const { t } = useTranslation();
  console.log('SuperIntelligence component rendered'); // デバッグ用ログ

  return (
    <section id="super-intelligence" className="section">
      <h2>{t('super_intelligence_title')}</h2>
      <p>{t('super_intelligence_description')}</p>
    </section>
  );
};

export default React.memo(SuperIntelligence);
