// src/components/Ethics.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Ethics = () => {
  const { t } = useTranslation();
  console.log('Ethics component rendered'); // デバッグ用ログ

  return (
    <section id="ethics" className="section">
      <h2>{t('ethics_title')}</h2>
      <p>{t('ethics_description')}</p>
    </section>
  );
};

export default React.memo(Ethics);
