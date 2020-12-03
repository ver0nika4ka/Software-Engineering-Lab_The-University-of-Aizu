
import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';

function Developers() {
  const [t, i18n] = useTranslation();

  return (
    <div className="Developers">
      <div className="container_content">
        <div className="container_contentFrame">
          <h2 className="container_title">{t('開発者')}</h2>
          <p>{t('このウェブサイトの開発は修士の加藤さんと学部生の大塚さんにより2015年に始まりました。')}</p>
          <p>{t('ウェブサイトの設置以降、多くの学生がこの開発に携わっています。')}</p>
        </div>

        <div className="container_contentFrame">
          <h2 className="container_title">{t('開発者一覧')}</h2>

          {/* TODO: HeadressCMS */}
          <table class="table">
            <thead>
              <tr>
                <th scope="col">{t('年')}</th>
                <th scope="col">{t('名前')}</th>
                <th scope="col">{t('開発内容')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2015-2016</td>
                <td>加藤さん・大塚さん</td>
                <td>デザイン, 開発, </td>
              </tr>
              <tr>
                <td>2016</td>
                <td>村井さん</td>
                <td>内部システムの改善, マニュアル作成 Ver. 1</td>
              </tr>
              <tr>
                <td>2016-2017</td>
                <td>斎藤さん・チェンさん</td>
                <td>ウェブサイトの稼働, 後輩学生の教育</td>
              </tr>
              <tr>
                <td>2017-2018</td>
                <td>鬼頭さん</td>
                <td>バグ修正, ニュース機能開発</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>根本さん</td>
                <td>バグ修正, 内部システムの改善,マニュアル作成 Ver. 2</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>鬼頭さん</td>
                <td>ニュース機能開発, マニュアル作成 ver 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Developers;

