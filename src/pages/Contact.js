// src/components/Contact.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Contact = () => {
  const { t } = useTranslation();
  console.log('Contact component rendered'); // デバッグ用ログ

  return (
    <section id="contact" className="section">
      <h2>{t('contact_title', 'Contact Us')}</h2>
      <p>{t('contact_description', 'Get in touch with us for more information.')}</p>
    </section>
  );
};

export default React.memo(Contact);
