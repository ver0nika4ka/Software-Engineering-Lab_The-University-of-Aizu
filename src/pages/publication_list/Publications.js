import React, { useState, useEffect } from 'react';
import axios from 'axios'
// i18n
import { useTranslation } from 'react-i18next';
// components
import Professors from '../../components/Professors'

function Publications() {
  const [t, i18n] = useTranslation();

  // *************** get article data *************** //
  const [article, setArticle] = useState();

  // If the language changes, this API will be re-executed
  useEffect(() => {
    let baseUrl = 'https://software-engineering-lab.microcms.io/api/v1/posts'
    // select article (ja or en)
    let articleId = 'Publications'
    // get API-KEY from .env
    const config = { 'X-API-KEY': process.env.REACT_APP_API_KEY };
    // get request
    axios.get(`${baseUrl}/${articleId}`, { headers: config })
      .then(response => {
        // console.log(response.data);
        setArticle(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="Publications">
      <div className="container_content">
        <div className="container_contentFrame">
          <h2 className="container_title">{t('指導教員')}</h2>
          <Professors />
        </div>
        {article &&
          <div className="container_contentFrame">
            <h2 className="container_title">{i18n.language === 'ja' ? article.title_ja : article.title_en}</h2>
            <div className="article">
              <div dangerouslySetInnerHTML={{ __html: i18n.language === 'ja' ? article.content_ja : article.content_en }}></div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Publications;

