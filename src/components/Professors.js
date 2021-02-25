import React, { useState, useEffect } from 'react';
import axios from 'axios'
// i18n
import { useTranslation } from 'react-i18next';
// styles
import "../styles/page/members/Members.css"

function Professors() {
  const [t, i18n] = useTranslation();

  // *************** get article data *************** //
  const [professors, setProfessors] = useState();

  // If the language changes, this API will be re-executed
  useEffect(() => {
    const limit = 10
    let baseUrl = `https://software-engineering-lab.microcms.io/api/v1/professors?limit=${limit}&filters=status[equals]true`
    // get API-KEY from .env
    const config = { 'X-API-KEY': process.env.REACT_APP_API_KEY };
    // get request
    axios.get(`${baseUrl}`, { headers: config })
      .then(response => {
        const data = response.data.contents
        // Sort in ascending order by name
        data.sort((a, b) => {
          if (a.name_en < b.name_en) return -1;
          if (a.name_en > b.name_en) return 1;
          return 0;
        });
        setProfessors(data)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="membersListWrapper flex">
      <div className="Professors membersList flex wrap center">
        {professors &&
          professors.map((member, i) => (
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
  );
}

export default Professors;

