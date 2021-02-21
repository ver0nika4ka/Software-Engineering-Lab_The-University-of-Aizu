import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';
// images
import Image1 from '../../images/education/1.jpg'
import Image2 from '../../images/education/2.jpg'
import PDF from '../../images/education/KlyuevITGroupConcludingRemarks.pdf'
// styles
import "../../styles/page/education/ItSpecialistProgram.scss"

function ItSpecialistProgram() {
  const [t, i18n] = useTranslation();

  return (
    <div className="ItSpecialistProgram">
      <div className="container_content">

        <div className="container_contentFrame">
          <h2 className="container_title">{t('Program for Leading Edge IT Specialists')}</h2>
          <p>{t('2007年、Program for Leading Edge IT Specialistsに参加し、研究室の学生に対して、検索エンジンの一般的な目的のためのツールのまとめるように提案しました。学期ごとの教育や研究は私たちに取って新しいスタイルであり、最初のグループは日本人とロシア人で構成され、彼らは2009年秋にこのプログラムを成功させました。')}</p>
          <div className="ItSpecialistProgram_images flex center wrap">
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
          </div>
          <p className="ItSpecialistProgram_imageTitle">{t('修士論文口頭発表会')}</p>
        </div>

        <div className="container_contentFrame">

          <p className="ItSpecialistProgram_listTitle">{t('教育方法の主な特徴')}</p>
          <ul>
            <li>{t('プロジェクトは個人とグループワークの2種類ある。')}</li>
            <li>{t('それぞれのチームメンバーはトピック決定の責任がある。')}</li>
            <li>{t('週に一度、チームメンバーはそれぞれの担当分野の進捗状況について報告する。')}</li>
          </ul>
        </div>

        <div className="container_contentFrame">
          <p className="ItSpecialistProgram_listTitle">{t('プロジェクトマネージャーは交代制。それぞれのチームメンバーの役割は月ごとに変わる。')}</p>
          <ul>
            <li>{t('ソフトウェアエンジニアは2人。彼らはプログラミングコードを書いたりソフトウェアに関連したことについての責任を持つ。')}</li>
            <li>{t('残り一人はマネージャーになり、プロジェクトの進行具合などを管理する。')}</li>
            <li>{t('月に一度、それぞれの役割は交代し、三ヶ月後には全てのメンバーが全ての役割を経験する。')}</li>
          </ul>
        </div>

        <div className="container_contentFrame">
          <p className="ItSpecialistProgram_listTitle">{t('特別活動の役割。私たちは3つのタイプの活動について開拓した。')}</p>
          <ul>
            <li>{t('お茶会。私たちのコンサルタント兼プロジェクトの評価担当者であるNygard教授とSifer教授とのミーティングをリラックスした環境でおこなった。')}</li>
            <li>{t('国際学会への参加。全てのメンバーは海外で行われた国際学会にて口頭発表を行った。')}</li>
            <li>{t('週ごとのグループミーティング。議論中の積極的な批評。')}</li>
          </ul>
        </div>

        <div className="container_contentFrame">
          <p className="ItSpecialistProgram_listTitle">{t('私たちが考慮すべき課題')}</p>
          <ol>
            <li>{t('それぞれのメンバーの今までの経歴')}</li>
            <li>{t('研究者としての学生の育成')}</li>
            <li>{t('評価')}</li>
            <li>{t('自己組織化')}</li>
            <li>{t('就職活動')}</li>
          </ol>
        </div>

        <div className="container_contentFrame">
          <p>{t('2009年8月13日に行われた修士論文発表会にて、指導担当者による批評と共に完結した。発表資料については以下のリンクからダウンロードできます。')}</p>
          <a className="link" href={PDF} target="_blank" rel="noopener noreferrer" >[PDF]</a>
        </div>
      </div>
    </div>
  );
}

export default ItSpecialistProgram;

