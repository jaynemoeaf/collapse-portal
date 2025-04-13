// src/components/Team.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const Team = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="team-section">
      <div className="team-background">
        <h2>{t('team_title')}</h2>
        <div className="team-content">
          <div className="team-subsection">
            <h3>{t('team_leadership_title')}</h3>
            <div className="team-members">
              <div className="team-member">
                <h4>{t('team_ceo_name')}</h4>
                <p>{t('team_ceo_description')}</p>
              </div>
              <div className="team-member">
                <h4>{t('team_cto_name')}</h4>
                <p>{t('team_cto_description')}</p>
              </div>
              <div className="team-member">
                <h4>{t('team_coo_name')}</h4>
                <p>{t('team_coo_description')}</p>
              </div>
            </div>
          </div>

          <div className="team-subsection">
            <h3>{t('team_structure_title')}</h3>
            <p>{t('team_structure_intro')}</p>
            <div className="team-departments">
              <div className="department-group">
                <h4>{t('team_material_domains_title')}</h4>
                <div className="department">
                  <h5>{t('team_natural_science_title')}</h5>
                  <p>{t('team_natural_science_description')}</p>
                </div>
                <div className="department">
                  <h5>{t('team_applied_tech_title')}</h5>
                  <p>{t('team_applied_tech_description')}</p>
                </div>
                <div className="department">
                  <h5>{t('team_social_science_title')}</h5>
                  <p>{t('team_social_science_description')}</p>
                </div>
                <div className="department">
                  <h5>{t('team_humanities_title')}</h5>
                  <p>{t('team_humanities_description')}</p>
                </div>
              </div>
              <div className="department-group">
                <h4>{t('team_non_material_domains_title')}</h4>
                <div className="department">
                  <h5>{t('team_spiritual_research_title')}</h5>
                  <p>{t('team_spiritual_research_description')}</p>
                </div>
                <div className="department">
                  <h5>{t('team_creative_title')}</h5>
                  <p>{t('team_creative_description')}</p>
                </div>
                <div className="department">
                  <h5>{t('team_emotional_relationships_title')}</h5>
                  <p>{t('team_emotional_relationships_description')}</p>
                </div>
                <div className="department">
                  <h5>{t('team_reality_interference_title')}</h5>
                  <p>{t('team_reality_interference_description')}</p>
                </div>
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

export default Team;
