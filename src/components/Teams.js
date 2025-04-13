// src/components/Team.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Team = () => {
  const { t } = useTranslation();
  console.log('Team component rendered'); // デバッグ用ログ

  const leadership = [
    { name: t('team_ceo_name'), description: t('team_ceo_description') },
    { name: t('team_cto_name'), description: t('team_cto_description') },
    { name: t('team_coo_name'), description: t('team_coo_description') },
  ];

  const materialDomains = [
    { title: t('team_natural_science_title'), description: t('team_natural_science_description') },
    { title: t('team_applied_tech_title'), description: t('team_applied_tech_description') },
    { title: t('team_social_science_title'), description: t('team_social_science_description') },
    { title: t('team_humanities_title'), description: t('team_humanities_description') },
  ];

  const nonMaterialDomains = [
    { title: t('team_spiritual_research_title'), description: t('team_spiritual_research_description') },
    { title: t('team_creative_title'), description: t('team_creative_description') },
    { title: t('team_emotional_relationships_title'), description: t('team_emotional_relationships_description') },
    { title: t('team_reality_interference_title'), description: t('team_reality_interference_description') },
  ];

  return (
    <section id="team" className="team-section">
      <div className="team-background">
        <h2>{t('team_title')}</h2>
        <div className="team-content">
          <div className="team-subsection">
            <h3>{t('team_leadership_title')}</h3>
            <div className="team-members">
              {leadership.map((member, index) => (
                <div key={index} className="team-member">
                  <h4>{member.name}</h4>
                  <p>{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="team-subsection">
            <h3>{t('team_structure_title')}</h3>
            <p>{t('team_structure_intro')}</p>
            <div className="team-departments">
              <div className="department-group">
                <h4>{t('team_material_domains_title')}</h4>
                {materialDomains.map((dept, index) => (
                  <div key={index} className="department">
                    <h5>{dept.title}</h5>
                    <p>{dept.description}</p>
                  </div>
                ))}
              </div>
              <div className="department-group">
                <h4>{t('team_non_material_domains_title')}</h4>
                {nonMaterialDomains.map((dept, index) => (
                  <div key={index} className="department">
                    <h5>{dept.title}</h5>
                    <p>{dept.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="team-subsection">
            <h3>{t('team_summary_title')}</h3>
            <p>{t('team_summary')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Team); // パフォーマンス最適化
