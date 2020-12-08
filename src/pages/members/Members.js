
import React, { useState, useEffect } from 'react';
import axios from 'axios'
// i18n
import { useTranslation } from 'react-i18next';
// components
import Professors from '../../components/Professors'
// styles
import "../../styles/page/members/Members.scss"

function Members() {
  const [t, i18n] = useTranslation();

  // *************** get members data *************** //
  const [masterStudents, setMasterStudents] = useState();
  const [undergraduateStudents, setUndergraduateStudents] = useState();

  // If the language changes, this API will be re-executed
  useEffect(() => {
    const limit = 100
    let baseUrl = `https://software-engineering-lab.microcms.io/api/v1/members?limit=${limit}&filters=graduated[not_exists]`
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
    <div className="Members">
      <div className="container_content">
        <div className="container_contentFrame">
          <h2 className="container_title">{t('指導教員')}</h2>
          <Professors />
        </div>

        <div className="container_contentFrame">
          <h2 className="container_title">{t('学生')}</h2>
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
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="container_contentFrame">
          <h2 className="container_title">{t('学生')}</h2>
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

export default Members;

