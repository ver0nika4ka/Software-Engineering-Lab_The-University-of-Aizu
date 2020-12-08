import React, { useState, useEffect } from 'react';
import axios from 'axios'
// i18n
import { useTranslation } from 'react-i18next';
// styles
import "../styles/component/Professors.scss"

function Professors() {
  const [t, i18n] = useTranslation();

  // *************** get article data *************** //
  const [professors, setProfessors] = useState();

  // If the language changes, this API will be re-executed
  useEffect(() => {
    let baseUrl = 'https://software-engineering-lab.microcms.io/api/v1/professors'
    // get API-KEY from .env
    const config = { 'X-API-KEY': process.env.REACT_APP_API_KEY };
    // get request
    axios.get(`${baseUrl}`, { headers: config })
      .then(response => {
        console.log(response.data.contents);
        setProfessors(response.data.contents)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="Professors flex center">
      {professors &&
        professors.map((professor, i) => (
          <div className="professor" key={i}>
            <a href={professor.link} target="_blank" className="flex wrap" rel="noopener noreferrer" >
              <div className="professorImage flex">
                <img src={professor.image.url} alt="" />
              </div>
              <p className="professorName ">{i18n.language === 'ja' ? professor.name_ja : professor.name_en}</p>
            </a>
          </div>
        ))
      }
    </div>
  );
}

export default Professors;

