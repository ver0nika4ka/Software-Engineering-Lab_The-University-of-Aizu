import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  ja: {
    translation: {
      // App
      '研究': '研究',
      '研究室について': '研究室について',
      '卒業テーマ': '卒業テーマ',
      '国際交流': '国際交流',
      'ニュース': 'ニュース',
      '論文集': '論文集',
      '教育': '教育',
      'ITスペシャリストプログラム': 'ITスペシャリストプログラム',
      'メンバー': 'メンバー',
      '卒業生': '卒業生',
      '学生募集': '学生募集',
      '業績': '業績',
      '国際学会': '国際学会',
      'その他': 'その他',
      'ギャラリー': 'ギャラリー',
      '会津大学': '会津大学',
      '大学へのアクセス': '大学へのアクセス',
      'アクセス統計': 'アクセス統計',
      '開発者': '開発者',
      // Top
      'ソフトウェア工学講座': 'ソフトウェア工学講座',
      '訪問者数': '訪問者数',
    },
  },
  en: {
    translation: {
      '研究': 'Reserch',
      '研究室について': 'About us',
      '卒業テーマ': 'Graduation Research Themes',
      '国際交流': 'International Relations',
      'ニュース': 'News',
      '論文集': 'Publication List',
      '教育': 'Education',
      'ITスペシャリストプログラム': 'IT Specialist Program',
      'メンバー': 'Members',
      '卒業生': 'Graduated Members',
      '学生募集': 'Prospective Students',
      '業績': 'Achievements',
      '国際学会': 'Conferences and Workshops',
      'その他': 'Others',
      'ギャラリー': 'Gallery',
      '会津大学': 'The University of Aizu',
      '大学へのアクセス': 'Access',
      'アクセス統計': 'Statistics',
      '開発者': 'Developers',
      // Top
      'ソフトウェア工学講座': 'Software Engineering Lab',
      '訪問者数': 'Number of visitors',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "ja",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;