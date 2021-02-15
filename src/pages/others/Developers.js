import React, { useState, useEffect } from 'react';
import axios from 'axios'
// i18n
import { useTranslation } from 'react-i18next';

function Developers() {
  const [t, i18n] = useTranslation();

  // *************** get members data *************** //
  const [developers, setDevelopers] = useState();

  // If the language changes, this API will be re-executed
  useEffect(() => {
    let baseUrl = `https://software-engineering-lab.microcms.io/api/v1/developers`
    // get API-KEY from .env
    const config = { 'X-API-KEY': process.env.REACT_APP_API_KEY };
    // get request
    axios.get(`${baseUrl}`, { headers: config })
      .then(response => {
        const data = response.data.contents
        // Sort in ascending order
        data.sort((a, b) => {
          if (a.year < b.year) return -1;
          if (a.year > b.year) return 1;
          return 0;
        });
        setDevelopers(data)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="Developers">
      <div className="container_content">
        <div className="container_contentFrame">
          <h2 className="container_title">{t('開発者')}</h2>
          <p>{t('このウェブサイトの開発は修士の加藤さんと学部生の大塚さんにより2015年に始まりました。')}
            <br />
            {t('ウェブサイトの設置以降、多くの学生がこの開発に携わっています。')}</p>
        </div>

        <div className="container_contentFrame">
          <h2 className="container_title">{t('開発者一覧')}</h2>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">{t('年')}</th>
                <th scope="col">{t('名前')}</th>
                <th scope="col">{t('開発内容')}</th>
              </tr>
            </thead>
            <tbody>
              {developers &&
                developers.map((developer, i) => (
                  <tr>
                    <td>{developer.year}</td>
                    <td>{i18n.language === 'ja' ? developer.name_ja : developer.name_en}</td>
                    <td>{i18n.language === 'ja' ? developer.content_ja : developer.content_en}
                      {developer.link &&
                        <a href={developer.link} target="_blank">, {t('詳細')}</a>
                      }
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Developers;

