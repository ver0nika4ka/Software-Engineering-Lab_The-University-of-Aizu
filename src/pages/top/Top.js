import React from 'react';
// i18n
import { useTranslation } from 'react-i18next';
// components
import NumberOfVisitors from './ NumberOfVisitors'
// images
import Logo from '../../images/top/aizu_logo.gif'
import Top1 from '../../images/top/top_1.jpg'
import Top2 from '../../images/top/top_2.jpg'
import Top3 from '../../images/top/top_3.jpg'
// import ScriptTag from 'react-script-tag';
// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// styles
import '../../styles/page/top/top.css'

const Top = () => {
  const [t, i18n] = useTranslation();

  return (
    <div className="top">
      <div className="home_header flex center">
        <div className="home_logo">
          <img src={Logo} alt=""></img>
        </div>
        <h1 className="home_title">{t('ソフトウェア工学講座')}</h1>
      </div>

      <div className="home_carousel">
        <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} stopOnHover>
          <img src={Top1} alt="" />
          <img src={Top2} alt="" />
          <img src={Top3} alt="" />
        </Carousel>
      </div>

      <div className="home_footer flex center">
        <p className="counter">{t('訪問者数')}: </p>
        <NumberOfVisitors />
        {/* <ScriptTag isHydrating={true} type="text/javascript" src="//counter.websiteout.net/js/18/0/7325/1" /> */}
      </div>
    </div>
  );
}

export default Top;
