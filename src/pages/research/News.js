import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "../../styles/page/research/News.scss"

function News() {
  const [mails, setMails] = useState(null);
  const [selectedMail, setSelectedMail] = useState(0);

  // get mails
  const [init, setInit] = useState(true);
  useEffect(() => {
    axios.get('https://labnewsapi.herokuapp.com/api/v1/mails')
      .then(response => {
        const filterData = response.data.data.filter(mail => {
          // sel filter
          if (mail.subject.includes('SEL')) {
            return mail
          }
        })
        setMails(filterData)
      }).catch(e => {
        console.log(e);
        return e
      }).finally(() => {
        return "finally"
      })
  }, [init]);

  const formatDate = d => {
    return d.split('T')[0].split('-').join('/')
  }

  const displayBody = body => {
    return "<span style=\"white-space: pre;\">".concat(body.concat("</span>"))
  }

  return (
    <div className="News flex center">
      {mails ?
        <>
          <div className="News_lists">
            {mails.map((mail, i) => (
              <div key={i}
                className="News_item"
                onClick={() => {
                  setSelectedMail(i)
                }}>
                <p className="News_mailSubject">{mail.subject}</p>
                <p className="News_mailDate">{formatDate(mail.date)}</p>
              </div>
            ))}
          </div>
          {selectedMail != null ?
            <div className="News_mailContents flex column">
              <div className="News_mailContentsModal"
                onClick={() => {
                  setSelectedMail(null)
                }}>
              </div>
              <h3 className="News_mailTitle">{mails[selectedMail].subject}</h3>
              <div className="News_mailBody" dangerouslySetInnerHTML={{ __html: displayBody(mails[selectedMail].body) }} ></div>
            </div>
            :
            null
          }
        </>
        :
        <>
          <div className="News_loading flex center">
            <div className="News_lists">
              <div className="News_item movingShade"></div>
              <div className="News_item movingShade"></div>
              <div className="News_item movingShade"></div>
              <div className="News_item movingShade"></div>
            </div>
            <div className="News_mailContents">
              <h3 className="News_mailTitle movingShade"></h3>
              <h3 className="News_mailBody movingShade"></h3>
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default News;
