import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';
import Prospective1 from "../../images/members/prospective_1.png"

function ProspectiveStudents() {
  const [t, i18n] = useTranslation();

  return (
    <div className="ProspectiveStudents">
      <div className="container_content">
        <h2 className="container_title">{t('ソフトウェア工学講座は、ソフトウェア工学に興味がある学生を募集しています!')}</h2>

        <div className="container_contentFrame flex wrap">
          <div>
            <div className="container_contentFrame">
              <ul>
                <li>{t('やる気に満ち溢れている')}</li>
                <li>{t('ソフトウェアエンジニアになりたい')}</li>
                <li>{t('自分の力を発揮したい')}</li>
                <li>{t('新しい事を発見したい')}</li>
              </ul>
            </div>

            <div className="container_contentFrame">
              <h3 className="container_subtitle">{t('学生は大歓迎です！')}</h3>
              <p>{t('研究室のより詳細な情報は')}
                <a className="link" href="http://web-ext.u-aizu.ac.jp/labs/is-se/members/pdf/ProspectiveStudents.pdf" target="_blank" rel="noopener noreferrer" >
                  {t('ここ')}
                </a>
                {t('をクリックしてください。')}
              </p>
              <p>{t('*資料は英語のみです。')}</p>
            </div>
          </div>
          <img src={Prospective1} alt="" width={400}></img>
        </div>

      </div>
    </div>
  );
}

export default ProspectiveStudents;

