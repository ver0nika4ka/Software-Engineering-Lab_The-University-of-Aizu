import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';
// styles
import '../../styles/page/not_found_page/NotFoundPage.scss'

const NotFoundPage = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="NotFoundPage">
      <h3>{t('該当するページは削除あるいは変更になりました。')}</h3>

      <ul>
        <li>{t('「トップページ」からあらためてリンクを辿って下さい。')}</li>
        <li>{t('また、対象ページのブックマークの変更も併せてお願い致します。')}</li>
      </ul>

      <p>
        {t('会津大学公式ホームページでリンク切れ等によりリンクがたどれない場合は、 お手数ですが')}
        <a href="mailto:web-info@u-aizu.ac.jp">web-info@u-aizu.ac.jp</a>
        {t('まで連絡下さいますようお願い致します。')}
      </p>
    </div>
  );
}

export default NotFoundPage;
