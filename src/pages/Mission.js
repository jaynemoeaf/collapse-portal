// src/components/Mission.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Mission = () => {
  const { t } = useTranslation();
  console.log('Mission component rendered'); // デバッグ用ログ

  const sections = [
    { title: t('mission_intro_title'), content: t('mission_intro') },
    { title: t('mission_ai_difference_title'), content: t('mission_ai_difference') },
    {
      title: t('mission_rem_system_title'),
      content: (
        <>
          {t('mission_rem_system_part1')}{' '}
          <span className="highlight">{t('mission_rem_system_highlight')}</span>{' '}
          {t('mission_rem_system_part2')}
        </>
      ),
    },
    { title: t('mission_goal_title'), content: t('mission_goal') },
  ];

  return (
    <section id="mission" className="mission-section">
      <div className="mission-background">
        <h2>{t('mission_title')}</h2>
        <div className="mission-content">
          {sections.map((section, index) => (
            <div key={index} className="mission-subsection">
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Mission); // パフォーマンス最適化
