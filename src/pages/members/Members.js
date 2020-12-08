
import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';
// components
import Professors from '../../components/Professors'

function Members() {
  const [t, i18n] = useTranslation();

  return (
    <div className="Members">
      <div className="container_content">
        <div className="container_contentFrame">
          <h2 className="container_title">{t('指導教員')}</h2>
          <Professors />
        </div>

        <div className="container_contentFrame">
          <h2 className="container_title">{t('学生')}</h2>
          {/* TODO: HeadressCMS */}
        </div>
      </div>
    </div>
  );
}

export default Members;

