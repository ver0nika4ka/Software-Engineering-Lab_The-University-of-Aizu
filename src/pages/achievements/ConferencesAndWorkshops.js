import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';

function ConferencesAndWorkshops() {
  const [t, i18n] = useTranslation();

  return (
    <div className="ConferencesAndWorkshops">
      <div className="container_content">
        <div className="container_contentFrame">
          <h2 className="container_title">{t('国際学会')}</h2>
        </div>
      </div>
    </div>
  );
}

export default ConferencesAndWorkshops;

