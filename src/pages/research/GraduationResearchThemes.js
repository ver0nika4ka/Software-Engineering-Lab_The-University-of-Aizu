import React from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';
// images
import Themes1 from '../../images/research/themes_1.png'
import Themes2 from '../../images/research/themes_2.png'
import Themes3 from '../../images/research/themes_3.png'
import Themes4 from '../../images/research/themes_4.png'
// styles
import "../../styles/page/research/GraduationResearchThemes.scss"

function GraduationResearchThemes() {
  const [t, i18n] = useTranslation();

  return (
    <div className="GraduationResearchThemes">

      <div className="GraduationResearchThemes_content">
        <div className="GraduationResearchThemes_contentFrame">
          <h2 className="GraduationResearchThemes_title">{t('クリューエフ研の研究内容')}</h2>
          <img className="GraduationResearchThemes_image" src={Themes1} alt=""></img>
        </div>

        <div className="GraduationResearchThemes_contentFrame">
          <h3 className="GraduationResearchThemes_subtitle">{t('知能システムの構築')}</h3>
          <img className="GraduationResearchThemes_image" src={Themes2} alt=""></img>
        </div>

        <div className="GraduationResearchThemes_contentFrame">
          <h3 className="GraduationResearchThemes_subtitle">{t('実践的情報セキュリティ')}</h3>
          <p>{t('情報セキュリティは、コンピュータセキュリティにおいて特にインターネットと関連した分野です。その目的は、インターネットに対する攻撃についての防御の手法やルールについての確立です。私たちの研究の目的は、インターネット対する様々な異なる攻撃手法やその防御方法について研究することです。')}</p>
        </div>
      </div>

      <div className="GraduationResearchThemes_content">
        <div className="GraduationResearchThemes_contentFrame">
          <h2 className="GraduationResearchThemes_title">{t('ハマダ研の研究内容')}</h2>
          <img className="GraduationResearchThemes_image" src={Themes3} alt=""></img>
        </div>

        <div className="GraduationResearchThemes_contentFrame">
          <h3 className="GraduationResearchThemes_subtitle">{t('提案されたプロジェクト')}</h3>
          <ul>
            <li>{t('知的双方向的マルチメディア学習フレームワーク')}</li>
            <li>{t('スマートメディアシステムに基づいた推薦システム')}</li>
            <li>{t('最適学習フレームワーク')}</li>
          </ul>
        </div>

        <div className="GraduationResearchThemes_contentFrame">
          <h3 className="GraduationResearchThemes_subtitle">{t('知的双方向的マルチメディア学習フレームワーク')}</h3>
          <p>{t('このプロジェクトは主に3つに分けられます。')}</p>
          <ul>
            <li>{t('人工知能を用いた顔認識システム')}</li>
            <li>{t('マルチメディア学習モジュール')}</li>
            <li>{t('モジュールの学習スタイル')}</li>
          </ul>
          <img className="GraduationResearchThemes_image" src={Themes4} alt=""></img>
        </div>

        <a className="link" href="http://web-ext.u-aizu.ac.jp/labs/is-se/research/pdf/SoftwareEngineeringLab_LabIntroduction_2015_0402.pdf" target="_blank">{t('スライドを入手する')}</a>
      </div>
    </div>
  );
}

export default GraduationResearchThemes;
