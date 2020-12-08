import React, { useState, useEffect } from 'react';
import axios from 'axios'
// i18n
import { useTranslation } from 'react-i18next';

function ConferencesAndWorkshops() {
  const [t, i18n] = useTranslation();

  // *************** get article data *************** //
  const [article, setArticle] = useState();

  // If the language changes, this API will be re-executed
  useEffect(() => {
    let baseUrl = 'https://software-engineering-lab.microcms.io/api/v1/posts'
    // select article (ja or en)
    let articleId = (i18n.language === 'ja') ? 'jpspbdfmj' : '3aoa2f1c8o'
    // get API-KEY from .env
    const config = { 'X-API-KEY': process.env.REACT_APP_API_KEY };
    // get request
    axios.get(`${baseUrl}/${articleId}`, { headers: config })
      .then(response => {
        setArticle(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [i18n.language]);

  return (
    <div className="ConferencesAndWorkshops">
      <div className="container_content">
        <div className="container_contentFrame">
          {article &&
            <>
              <h1 className="container_title">{article.title}</h1>
              <div className="article">
                <div dangerouslySetInnerHTML={{ __html: article.content }}></div>
              </div>
            </>
          }
        </div>
      </div>
    </div>
  );
}

export default ConferencesAndWorkshops;

