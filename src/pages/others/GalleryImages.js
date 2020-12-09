import React, { useState, useEffect } from 'react';
// i18n
import { useTranslation } from 'react-i18next';
// styles
import '../../styles/page/others/Gallery.scss'

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

  return (
    <div className="GalleryImages">
      <div className="galleryItems flex wrap">
        {openItem === null &&
          galleryImages.map((g, i) => (
            <div key={i} className="galleryItem"
              style={{ backgroundImage: `url(${require(`../../images/gallery/${g.name}/1.jpg`)})` }}
              onClick={() => changeOpenItem(i)}>
              <div className="galleryItemInfo">
                <p className="galleryItemInfo_name"> {g.name}</p>
                <p className="galleryItemInfo_imageNum"> {g.imageNum}</p>
              </div>
            </div>
          ))
        }

        {openItem !== null && galleryImages[openItem] &&
          <div>
            <div className="flex">
              <h4>{t(galleryName)} {'>'} {galleryImages[openItem].name}</h4>
              <button onClick={() => {
                setOpenItem(null)
              }}>back</button>
            </div>
            {(() => {
              const items = [];
              for (let j = 0; j < galleryImages[openItem].imageNum; j++) {
                items.push(<img key={j} src={require(`../../images/gallery/${galleryImages[openItem].name}/${j + 1}.jpg`)}
                  onClick={() => {
                    selectModalImage(galleryImages[openItem].name, j + 1)
                    window.scrollTo(0, 0)
                  }} />)
              }
              return <div className="galleryImages flex wrap">{items}</div>;
            })()}
          </div>
        }

        {modalImage &&
          <div className="modal flex">
            <div className="modalWrapper" onClick={() => {
              setModalImage(null)
            }}>
            </div>
            <img src={require(`../../images/gallery/${modalImage.name}/Original/${modalImage.num}.jpg`)}></img>
          </div>
        }
      </div>
    </div>
  );
}

export default GalleryImages;

