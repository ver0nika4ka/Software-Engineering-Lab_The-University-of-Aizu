import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// i18n
import { useTranslation } from 'react-i18next';
// top
import Top from "../pages/top/Top"
// research
import AboutUs from "../pages/research/AboutUs"
import GraduationResearchThemes from "../pages/research/GraduationResearchThemes"
import InternationalRelations from "../pages/research/InternationalRelations"
import News from "../pages/research/News"
// publication_list
import Publications from "../pages/publication_list/Publications"
// education
import ItSpecialistProgram from "../pages/education/ItSpecialistProgram"
// members
import Gaduated from "../pages/members/Gaduated"
import Members from "../pages/members/Members"
import ProspectiveStudents from "../pages/members/ProspectiveStudents"
// achievements
import Achievements from "../pages/achievements/Achievements"
import ConferencesAndWorkshops from "../pages/achievements/ConferencesAndWorkshops"
// others
import InternationlConferences from "../pages/others/InternationlConferences"
import Statistics from "../pages/others/Statistics"
import Developers from "../pages/others/Developers"
// styles
import '../styles/layout/App.scss';

export default function App() {
  const [openMenuItem, setOpenMenuItem] = useState([false, false, false, false]);
  const changeOpenMenuItem = i => {
    const newOpenMenuItem = [false, false, false, false]
    newOpenMenuItem[i] = !openMenuItem[i]
    setOpenMenuItem(newOpenMenuItem)
  }

  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState('ja');
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <Router>
      <div >
        <header className="header">
          <nav>
            <ul className="menu">
              <li className="menu_item">
                <Link to="/top">{t('Top')}</Link>
              </li>

              <li className="menu_item noLink"
                onClick={() => changeOpenMenuItem(0)}>
                <a >{t('研究')}</a>
                {openMenuItem[0] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/research/about_us">{t('研究室について')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/research/graduation_research_themes">{t('卒業テーマ')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/research/international_relations">{t('国際交流')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/research/news">{t('ニュース')}</Link>
                    </li>
                  </ul>
                }
              </li>


              <li className="menu_item">
                <Link to="/publication_list">{t('論文集')}</Link>
              </li>

              <li className="menu_item noLink"
                onClick={() => changeOpenMenuItem(1)}>
                <a >{t('教育')}</a>
                {openMenuItem[1] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/it_specialist_program">{t('ITスペシャリストプログラム')}</Link>
                    </li>
                  </ul>
                }
              </li>

              <li className="menu_item noLink"
                onClick={() => changeOpenMenuItem(2)}>
                <a >{t('メンバー')}</a>
                {openMenuItem[2] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/members/member">{t('メンバー')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/members/gaduated">{t('卒業生')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/members/prospective_students">{t('学生募集')}</Link>
                    </li>
                  </ul>
                }
              </li>

              <li className="menu_item noLink"
                onClick={() => changeOpenMenuItem(3)}>
                <a >{t('業績')}</a>
                {openMenuItem[3] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/achievements/achievements">{t('業績')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/achievements/conferences_and_workshops">{t('国際学会')}</Link>
                    </li>
                  </ul>
                }
              </li>

              <li className="menu_item noLink"
                onClick={() => changeOpenMenuItem(4)}>
                <a >{t('その他')}</a>
                {openMenuItem[4] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/others/internationl_conferences">{t('ギャラリー')}</Link>
                    </li>
                    <li className="menu_item">
                      <a href="https://www.u-aizu.ac.jp/" target="_blank" rel="noopener noreferrer">{t('会津大学')}</a>
                    </li>
                    <li className="menu_item">
                      <a href="https://www.u-aizu.ac.jp/access/" target="_blank" rel="noopener noreferrer">{t('大学へのアクセス')}</a>
                    </li>
                    <li className="menu_item">
                      <Link to="/others/statistics">{t('アクセス統計')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/others/developers">{t('開発者')}</Link>
                    </li>
                  </ul>
                }
              </li>
            </ul>

            <div className="languageButtons">
              <button className={`languageButtons_button`}
                onClick={() => {
                  if (lang === "ja") setLang("en")
                  else if (lang === "en") setLang("ja")
                }}>{lang === "ja" ? "English" : "日本語"}</button>
            </div>
          </nav>
        </header>

        <Switch>
          <Route path="/top">
            <Top />
          </Route>
          <Route path="/research/about_us">
            <AboutUs title={t('研究室について')} />
          </Route>
          <Route path="/research/graduation_research_themes">
            <GraduationResearchThemes />
          </Route>
          <Route path="/research/international_relations">
            <InternationalRelations />
          </Route>
          <Route path="/research/news">
            <News />
          </Route>
          <Route path="/publication_list">
            <Publications />
          </Route>
          <Route path="/it_specialist_program">
            <ItSpecialistProgram />
          </Route>
          <Route path="/members/gaduated">
            <Gaduated />
          </Route>
          <Route path="/members/member">
            <Members />
          </Route>
          <Route path="/members/prospective_students">
            <ProspectiveStudents />
          </Route>
          <Route path="/achievements/achievements">
            <Achievements />
          </Route>
          <Route path="/achievements/conferences_and_workshops">
            <ConferencesAndWorkshops />
          </Route>
          <Route path="/others/internationl_conferences">
            <InternationlConferences />
          </Route>
          <Route path="/others/statistics">
            <Statistics />
          </Route>
          <Route path="/others/developers">
            <Developers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}