
import React from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';

function Gaduated() {
  const [t, i18n] = useTranslation();

  return (
    <div className="Gaduated">
      <div className="container_content">
        <div className="container_contentFrame">
          <h2 className="container_title">{t('卒業生')}</h2>
          <h3 className="container_subtitle">{t('修士課程')}</h3>
          {/* TODO: HeadressCMS */}
          <h3 className="container_subtitle">{t('学部')}</h3>
          {/* TODO: HeadressCMS */}
        </div>
      </div>
    </div>
  );
}

export default Gaduated;

