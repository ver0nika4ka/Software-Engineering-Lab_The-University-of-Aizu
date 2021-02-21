import React, { useState, useEffect } from 'react';
import axios from 'axios'
// i18n
import { useTranslation } from 'react-i18next';
// styles
import "../../styles/page/members/Members.css"

function FormerProfessor() {
  const [t, i18n] = useTranslation();

  // *************** get members data *************** //
  const [FormerProfessors, setFormerProfessors] = useState();

  // If the language changes, this API will be re-executed
  useEffect(() => {
    const limit = 10
    let baseUrl = `https://software-engineering-lab.microcms.io/api/v1/professors?limit=${limit}&filters=status[equals]false`
    // get API-KEY from .env
    const config = { 'X-API-KEY': process.env.REACT_APP_API_KEY };
    // get request
    axios.get(`${baseUrl}`, { headers: config })
      .then(response => {
        setFormerProfessors(response.data.contents)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="FormerProfessor">
      <div className="container_content">
        <div className="container_contentFrame">
          <h2 className="container_title">{t('元指導教員')}</h2>
          <div className="membersListWrapper flex">
            <div className="FormerProfessors membersList flex wrap center">
              {FormerProfessors &&
                FormerProfessors.map((member, i) => (
                  <div className="member" key={i}>
                    <a href={member.link} target="_blank" className="flex column" rel="noopener noreferrer" >
                      <div className="memberImage flex">
                        <img src={member.image.url} alt="" />
                      </div>
                      <p className="memberName ">{i18n.language === 'ja' ? member.name_ja : member.name_en}</p>
                    </a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormerProfessor;

