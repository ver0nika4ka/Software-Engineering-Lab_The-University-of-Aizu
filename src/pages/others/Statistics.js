
import React from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';
import Iframe from 'react-iframe'
function Statistics() {
  const [t, i18n] = useTranslation();

  return (
    <div className="Statistics">
      <Iframe url="https://ga-api.herokuapp.com"
        width="100%"
        height="600px"
        display="initial"
      />
    </div>
  );
}

export default Statistics;

