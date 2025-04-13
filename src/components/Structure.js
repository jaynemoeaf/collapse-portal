// src/components/Structure.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Structure = () => {
  const { t } = useTranslation();
  console.log('Structure component rendered'); // デバッグ用ログ

  return (
    <section id="structure" className="section">
      <h2>{t('structure_title')}</h2>
      <p>{t('structure_description')}</p>
    </section>
  );
};

export default React.memo(Structure);
