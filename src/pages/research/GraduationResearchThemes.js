import React from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';

function GraduationResearchThemes() {
  const [t, i18n] = useTranslation();

  return (
    <Layout title={t('卒業テーマ')} pathname="/research/about_us" >
      <div className="graduation_research_themes">
        GraduationResearchThemes
    </div>
    </Layout>
  );
}

export default GraduationResearchThemes;
