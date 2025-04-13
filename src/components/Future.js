// src/components/Future.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Future = () => {
  const { t } = useTranslation();
  console.log('Future component rendered'); // デバッグ用ログ

  return (
    <section id="future" className="section">
      <h2>{t('future_title')}</h2>
      <p>{t('future_description')}</p>
    </section>
  );
};

export default React.memo(Future);
