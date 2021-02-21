import React, { useState, useEffect } from 'react';
import axios from 'axios'
// i18n
import { useTranslation } from 'react-i18next';
// styles
import "../../styles/page/members/Members.css"

function Gaduated() {
  const [t, i18n] = useTranslation();

  // *************** get members data *************** //
  const [masterStudents, setMasterStudents] = useState();
  const [undergraduateStudents, setUndergraduateStudents] = useState();

  // If the language changes, this API will be re-executed
  useEffect(() => {
    const limit = 100
    let baseUrl = `https://software-engineering-lab.microcms.io/api/v1/members?limit=${limit}&filters=graduated[exists]`
    // get API-KEY from .env
    const config = { 'X-API-KEY': process.env.REACT_APP_API_KEY };
    // get request
    axios.get(`${baseUrl}`, { headers: config })
      .then(response => {
        const data = response.data.contents
        setMasterStudents(data.filter(d => d.grade_ja === "修士課程"))
        setUndergraduateStudents(data.filter(d => d.grade_ja === "学部生"))
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="Gaduated">
      <div className="container_content">
        <h2 className="container_title">{t('卒業生')}</h2>

        <div className="container_contentFrame">
          <h4 className="container_subtitle">{t('修士課程')}</h4>
          <div className="membersListWrapper">
            <div className="membersList flex wrap">
              {masterStudents &&
                masterStudents.map((member, i) => (
                  <div className="member" key={i}>
                    <div className="flex column" >
                      <div className="memberImage flex">
                        <img src={member.image ? member.image.url : ""} alt="" />
                      </div>
                      <p className="memberName">{i18n.language === 'ja' ? member.name_ja : member.name_en}</p>
                      <p className="memberGraduated">{i18n.language === 'ja' ? `${member.graduated}年卒業` : ` Graduated in ${member.graduated}`}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="container_contentFrame">
          <h4 className="container_subtitle">{t('学部生')}</h4>
          <div className="membersListWrapper">

            <div className="membersList flex wrap">
              {undergraduateStudents &&
                undergraduateStudents.map((member, i) => (
                  <div className="member" key={i}>
                    <div className="flex column" >
                      <div className="memberImage flex">
                        <img src={member.image ? member.image.url : ""} alt="" />
                      </div>
                      <p className="memberName ">{i18n.language === 'ja' ? member.name_ja : member.name_en}</p>
                      <p className="memberGraduated">{i18n.language === 'ja' ? `${member.graduated}年卒業` : ` Graduated in ${member.graduated}`}</p>
                    </div>
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

export default Gaduated;

