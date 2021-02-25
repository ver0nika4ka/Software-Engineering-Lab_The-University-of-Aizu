import React, { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Carousel } from 'react-responsive-carousel';
// i18n
import { useTranslation } from 'react-i18next';
// styles
import '../../styles/page/others/Gallery.css'

function GalleryImages({ galleryName, galleryImages }) {
  const [t, i18n] = useTranslation();

  const [openItem, setOpenItem] = useState(null);
  // console.log("openItem", openItem);
  const changeOpenItem = i => {
    setOpenItem(i)
    window.scrollTo(0, 0)
  }
  useEffect(() => {
    setOpenItem(null)
  }, [galleryName]);

  const [modalImage, setModalImage] = useState(null);
  const selectModalImage = (name, num) => {
    setModalImage({ name: name, num: num })
  }

  const renameGalleryTitle = (str, tag)=>{
     let name = ""
    const regex = /[A-Z][A-Z]+|[A-Z][a-z]+|\d+/g;
              str.match(regex).forEach(c => {
                name += `<${tag}>${c}&nbsp;</${tag}>`
              });
              return name
  }

  return (
    <div className="GalleryImages">
      <div className="GalleryImagesWrapper">

        {openItem === null &&
          <div className="galleryItems flex wrap">
            {galleryImages.map((g, i) => {
              // Line feed setting
              // let name = ""
              // const regex = /[A-Z][A-Z]+|[A-Z][a-z]+|\d+/g;
              // g.name.match(regex).forEach(c => {
              //   name += `<p>${c}&nbsp;</p>`
              // });

              return (
                <div key={g.name} className="galleryItem"
                  style={{ backgroundImage: `url(${require(`../../images/gallery/${g.name}/1.jpg`)})` }}
                  onClick={() => changeOpenItem(i)}>
                  <div className="galleryItemInfo">
                    <div className="galleryItemInfo_name" dangerouslySetInnerHTML={{ __html: renameGalleryTitle(g.name,"p") }}></div>
                    <div className="galleryItemInfo_imageNum"><p>{g.imageNum}</p></div>
                  </div>
                </div>
              )
            })}
          </div>
        }

        {openItem !== null && galleryImages[openItem] &&
          <div className="galleryItemContents">
            <div className="galleryItemContents_header flex flex-start">
              <h4 className="galleryItemContents_title">{t(galleryName)}&nbsp;{'>'}&nbsp;</h4>
              <h4 className="galleryItemContents_title flex" dangerouslySetInnerHTML={{ __html: renameGalleryTitle(galleryImages[openItem].name, "h4") }}></h4>
              <button className="galleryItemContents_backButton" onClick={() => {
                setOpenItem(null)
              }}>{'<'}</button>
            </div>
            {(() => {
              const items = [];
              for (let j = 0; j < galleryImages[openItem].imageNum; j++) {
                items.push(<img key={j} alt={`${openItem}-${galleryImages[openItem].imageNum}`} src={require(`../../images/gallery/${galleryImages[openItem].name}/${j + 1}.jpg`)}
                  onClick={() => {
                    selectModalImage(galleryImages[openItem].name, j + 1)
                    window.scrollTo(0, 0)
                  }} />)
              }
              return (
                <div className="galleryImages">
                  <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 400: 3, 500: 4, 700: 5 }}>
                    <Masonry>
                      {items}
                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              )
            })()}
          </div>
        }

        {modalImage &&
          <div className="modal flex">
            <div className="modalWrapper" onClick={() => {
              setModalImage(null)
            }}>
            </div>
             {(() => {
              const items = [];
              for (let j = 0; j < galleryImages[openItem].imageNum; j++) {
                items.push(<img key={j} src={require(`../../images/gallery/${galleryImages[openItem].name}/Original/${j + 1}.jpg`)}/>)
              }
              return (
                <div className="galleryImages">
                  <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 400: 3, 500: 4, 700: 5 }}>
                    <Masonry>
                        <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} stopOnHover>
                      {items}
                        </Carousel>
                    </Masonry>
                  </ResponsiveMasonry>
                </div>
              )
            })()}
          </div>
        }

      </div>
    </div>
  );
}

export default GalleryImages;

