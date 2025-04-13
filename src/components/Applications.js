// src/components/Applications.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Applications = () => {
  const { t } = useTranslation();
  console.log('Applications component rendered'); // デバッグ用ログ

  return (
    <section id="applications" className="section">
      <h2>{t('applications_title')}</h2>
      <p>{t('applications_description')}</p>
    </section>
  );
};

export default React.memo(Applications);
