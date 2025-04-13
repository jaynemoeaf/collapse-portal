// src/components/Mission.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Mission = () => {
  const { t } = useTranslation();

  return (
    <section id="mission" className="mission-section">
      <div className="mission-background">
        <h2>{t('mission_title')}</h2>
        <div className="mission-content">
          <div className="mission-subsection">
            <h3>{t('mission_intro_title')}</h3>
            <p>{t('mission_intro')}</p>
          </div>
          <div className="mission-subsection">
            <h3>{t('mission_ai_difference_title')}</h3>
            <p>{t('mission_ai_difference')}</p>
          </div>
          <div className="mission-subsection">
            <h3>{t('mission_rem_system_title')}</h3>
            <p>
              {t('mission_rem_system_part1')} <span className="highlight">{t('mission_rem_system_highlight')}</span> {t('mission_rem_system_part2')}
            </p>
          </div>
          <div className="mission-subsection">
            <h3>{t('mission_goal_title')}</h3>
            <p>{t('mission_goal')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
