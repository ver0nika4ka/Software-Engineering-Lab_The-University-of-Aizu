import React, { useState, useEffect } from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';

function AboutUs(title) {
  const [t, i18n] = useTranslation();

  return (
    <Layout title={title} pathname="/research/about_us" >
      <div className="AboutUs">
        {t('研究室について')}
      </div>
    </Layout>
  );
}

export default AboutUs;
