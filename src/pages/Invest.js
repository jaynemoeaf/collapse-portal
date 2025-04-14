// src/components/Invest.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Invest = () => {
  const { t } = useTranslation();
  console.log('Invest component rendered'); // デバッグ用ログ

  return (
    <section id="invest" className="section">
      <h2>{t('invest_title')}</h2>
      <p>{t('invest_description')}</p>
    </section>
  );
};

export default React.memo(Invest);
