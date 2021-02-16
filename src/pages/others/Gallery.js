
import React, { useState } from 'react';
import Layout from '../../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';
// Gallery
import GalleryImages from './GalleryImages'
// styles
import '../../styles/page/others/Gallery.scss'

function Gallery() {
  const [t, i18n] = useTranslation();

  const galleries = [{
    name: '国際学会',
    link: 'internationl_conferences',
    galleryImages: [
      { name: 'ICACT2020', imageNum: 2 },
      { name: 'ICACT2019', imageNum: 4 },
      { name: 'ICAIT2018', imageNum: 20 },
      { name: 'CPS18', imageNum: 6 },
      { name: 'IDAACS2017', imageNum: 5 },
      { name: 'ICAIT2016', imageNum: 7 },
      { name: 'CPS16', imageNum: 2 },
      { name: 'ICACT2016', imageNum: 5 },
      { name: 'IWAIT2015', imageNum: 13 },
      { name: 'ICACT2015', imageNum: 4 },
      { name: 'ICITST2014', imageNum: 3 },
      { name: 'ICIST2014', imageNum: 3 },
      { name: 'IDAACS2013', imageNum: 5 },
      { name: 'ICAIC2012', imageNum: 3 },
      { name: 'CPS2012', imageNum: 1 },
      { name: 'IDAACS2011', imageNum: 2 },
      { name: 'CPS2011', imageNum: 4 },
      { name: 'FedCSIS2011', imageNum: 1 },
      { name: 'HC2009', imageNum: 3 },
      { name: 'JCPC2009', imageNum: 3 },
    ]
  }, {
    name: 'オープンキャンパス',
    link: 'open_campus',
    galleryImages: [
      { name: 'OpenCampus2018', imageNum: 6 },
      { name: 'OpenCampus2017', imageNum: 16 },
      { name: 'OpenCampus2016', imageNum: 8 },
      { name: 'OpenCampus2015', imageNum: 19 },
      { name: 'OpenCampus2014', imageNum: 3 },
      { name: 'OpenCampus2012', imageNum: 3 },
      { name: 'OpenCampus2008', imageNum: 8 },
    ]
  }, {
    name: '卒業式',
    link: 'graduation',
    galleryImages: [
      { name: 'GraduationThesesDefence2021', imageNum: 4 },
      { name: 'GraduationThesesDefence2019', imageNum: 5 },
      { name: 'GraduationThesesDefence2017', imageNum: 12 },
      { name: 'GraduationThesesDefence2016', imageNum: 12 },
      { name: 'GraduationThesesDefence2015', imageNum: 2 },
      { name: 'GraduationThesesDefence2013', imageNum: 1 },
      { name: 'GraduationThesesDefence2011', imageNum: 3 },
      { name: 'Ceremony2011', imageNum: 7 },
      { name: 'Ceremony2010', imageNum: 3 },
      { name: 'Ceremony2009', imageNum: 2 },
    ]
  }, {
    name: 'その他',
    link: 'others',
    galleryImages: [
      { name: 'ReportZAIDAN2012', imageNum: 3 },
      { name: 'SearchContest2009', imageNum: 3 },
      { name: 'TeaSeminar2008', imageNum: 4 },
      { name: 'ACMICPC2008', imageNum: 7 },
    ]
  }]

  const [selectGallery, setSelectGallery] = useState(0);

  return (
    <div className="Gallery">
      <div className="menu flex space-between">
        <h2 className="Gallerytitle">{t('ギャラリー')}</h2>
        <div className="GalleryMenu flex wrap">
          {galleries.map((g, i) => (
            <a key={i} onClick={() => {
              setSelectGallery(i)
            }}
              className={`${(selectGallery === i) ? 'selected' : ''}`}
            >{t(g.name)}</a>
          ))}
        </div>
      </div>

      <Layout title={t(galleries[selectGallery].name)} path={`/others/gallery/${galleries[selectGallery].link}`}>
        <GalleryImages galleryName={galleries[selectGallery].name} galleryImages={galleries[selectGallery].galleryImages} />
      </Layout>
    </div>
  );
}

export default Gallery;

