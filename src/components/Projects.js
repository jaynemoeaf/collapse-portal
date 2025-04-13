// src/components/Projects.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Projects = () => {
  const { t } = useTranslation();
  console.log('Projects component rendered'); // デバッグ用ログ

  return (
    <section id="projects" className="section">
      <h2>{t('projects_title')}</h2>
      <p>{t('projects_description')}</p>
    </section>
  );
};

export default React.memo(Projects);
