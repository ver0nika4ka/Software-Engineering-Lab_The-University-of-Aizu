import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';

function InternationalRelations() {
  const [t, i18n] = useTranslation();

  return (
    <div className="InternationalRelations">
      <div className="container_contentFrame">
        <h2 className="container_title">{t('国際交流')}</h2>
        <p>
          {t('ソフトウェア工学の研究室では多々の大学と協力のもと共同研究や教育にも力を入れています。')}
          <a className="link" href="http://www.apmath.spbu.ru/en/" target="_blank">{t('サンクトペテルブルク国立大学（Saint-Petersburg State University）')}</a>
          {t(' や ')}
          <a className="link" href="http://www.en.spbstu.ru/" target="_blank">{t('サンクトペテルブルク工科大学（Peter the Great Saint-Petersburg Polytechnic University）')}</a>
          {t('などと協力しています。')}
        </p>

        <p>
          {t('私たちは協力関係にあるロシアの大学と交換留学の枠を設けています。2006年から始まったこのプログラムは毎年1人から2人の学生をロシアのサンクトペテルブルク国立大学へと送り毎年開催される')}
          <a className="link" href="http://www.cpsconf.ru/news/" target="_blank">{t('国際学会（the Annual Conference on Control Processes and Stability）')}</a>
          {t('にて論文の発表を行っています。また、ロシアの学生は会津大学で行われるイベント等に積極的に参加しています。')}
        </p>

        <p>
          {t('共同研究のグループは')}
          <a className="link" href="http://kspt.icc.spbstu.ru/research/science/jgirsr/en/" target="_blank">{t('情報検索やソフトウェア工学の分野')}</a>
          {t('において研究を行っています。')}
        </p>
      </div>

      <div className="container_contentFrame">
        <h2 className="container_title">{t('留学生の受け入れ')}</h2>
        <p>
          {t('2015年~2017年には中国、ロシア、ベラルーシからの学生が私たちの研究室メンバーとなりました。 ロシアそしてベラルーシからの学生は、日本大使館そして大学の推薦により海外学生のための日本政府の奨学金制度を受けています。 中国からの学生は')}
          <a className="link" href="http://www.u-aizu.ac.jp/sgu/program/index.html" target="_blank">{t('Global Educational Program')}</a>
          {t('を受けています。')}
        </p>

        <p>
          {t('2010年から始まった、')}
          <a className="link" href="http://www.cyut.edu.tw/english/" target="_blank">{t('台湾の朝陽科技大学（Chaoyang University of Technolog）')}</a>
          {t('から数名の大学院生を対象にしたプログラム（Dual - Degree Program）が実施されています。このプログラムは生徒が生徒自身が通う大学と留学先の大学の両大学で単位を取得でき、両大学共同の目的や認識を深めようというものです。また、国際的な交流や長期的な関係性を築こうといったプログラムでもあります。国際的な本プログラムは2009年に朝陽科技大学と覚書を交わしました。')}
        </p>
      </div>
    </div>
  );
}

export default InternationalRelations;
