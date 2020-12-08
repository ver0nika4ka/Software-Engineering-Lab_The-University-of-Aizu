import React, { useState, useEffect } from 'react';
import axios from 'axios'
// i18n
import { useTranslation } from 'react-i18next';
// images
import ProfKlyuev from '../../images/members/prof_klyuev.jpg'
import ProfHamada from '../../images/members/prof_hamada.jpg'
import ProfPyshkin from '../../images/members/prof_pyshkin.jpg'
// styles
import "../../styles/page/publication_list/Publications.scss"


function Publications() {
  const [t, i18n] = useTranslation();

  const professors = [{
    name: "ヴィタリー・クリューエフ 教授",
    photo: ProfKlyuev,
    link: "https://www.u-aizu.ac.jp/research/faculty/detail?cd=90071&lng=en"
  }, {
    name: "エフゲニー・ピシキン 教授",
    photo: ProfPyshkin,
    link: "https://www.u-aizu.ac.jp/research/faculty/detail?cd=90102"
  }, {
    name: "モハメド・ハマダ 教授",
    photo: ProfHamada,
    link: "https://www.u-aizu.ac.jp/research/faculty/detail?cd=90072"
  }]

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
          <div className="Publications_professors flex center">
            {professors.map((professor, i) => (
              <div className="Publications_professor" key={i}>
                <a href={professor.link} target="_blank" className="flex wrap" rel="noopener noreferrer" >
                  <img className="Publications_professorImage " src={professor.photo} alt="" />
                  <p className="Publications_professorName ">{t(professor.name)}</p>
                </a>
              </div>
            ))}
          </div>
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

