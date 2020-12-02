import React from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const [t, i18n] = useTranslation();

  return (
    <div className="AboutUs">
      {t('研究室について')}
    </div>
  );
}

export default AboutUs;
