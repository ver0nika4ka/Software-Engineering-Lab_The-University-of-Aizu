import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';

function Achievements() {
  const [t, i18n] = useTranslation();

  return (
    <div className="Achievements">
      <div className="container_content">
        <div className="container_contentFrame">
          <h2 className="container_title">{t('業績')}</h2>
          <h3 className="container_subtitle">{t('受賞')}</h3>
          <h3 className="container_subtitle">{t('研究業績')}</h3>
        </div>
      </div>
    </div>
  );
}

export default Achievements;

