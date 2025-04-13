// src/components/GrowthModel.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const GrowthModel = () => {
  const { t } = useTranslation();
  console.log('GrowthModel component rendered'); // デバッグ用ログ

  return (
    <section id="growth-model" className="section">
      <h2>{t('growth_model_title')}</h2>
      <p>{t('growth_model_description')}</p>
    </section>
  );
};

export default React.memo(GrowthModel);
