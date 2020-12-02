import React, { useState, useEffect } from 'react';
// i18n
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next, useTranslation } from 'react-i18next';
// SEO
import SEO from 'react-seo-component'
import { siteName, description } from '../siteconfig.json'

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources: {
    ja: {
      translation: {
        '研究': '研究',
        '開発者': '開発者',
      },
    },
    en: {
      translation: {
        '研究': 'Reserch',
        '研究室について': 'About us',
      },
    },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: { escapeValue: false },
});

export default function App({ title, pathname, children }) {
  const [t, i18n] = useTranslation();

  return (
    <div >
      <SEO
        title={title.title}
        titleTemplate={siteName}
        titleSeparator={`|`}
        description={description || 'nothin’'}
        pathname={pathname}
      />
      {children}
    </div>
  )
}