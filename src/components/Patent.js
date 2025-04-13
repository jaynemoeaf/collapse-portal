// src/components/Patent.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Patent = () => {
  const { t } = useTranslation();
  console.log('Patent component rendered'); // デバッグ用ログ

  return (
    <section id="patent" className="section">
      <h2>{t('patent_title')}</h2>
      <p>{t('patent_description')}</p>
    </section>
  );
};

export default React.memo(Patent);
