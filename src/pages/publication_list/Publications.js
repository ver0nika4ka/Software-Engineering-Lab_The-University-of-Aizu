import React from 'react';
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

  return (
    <div className="Publications">
      <div className="container_content">
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

      <div className="container_content">
        <h2 className="container_title">{t('学生による論文')}</h2>
        {/* TODO: HeadressCMS */}
      </div>
    </div>
  );
}

export default Publications;

