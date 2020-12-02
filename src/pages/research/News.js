import React from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';

function News() {
  const [t, i18n] = useTranslation();

  return (
    <div className="News">
      News
    </div>
  );
}

export default News;
