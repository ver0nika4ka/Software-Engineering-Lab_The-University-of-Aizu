import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from '../layouts/Layout'
// i18n
import { useTranslation } from 'react-i18next';
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSortDown } from '@fortawesome/free-solid-svg-icons'
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

const App = () => {
  const [openMenuItem, setOpenMenuItem] = useState([false, false, false, false]);
  const changeOpenMenuItem = i => {
    const newOpenMenuItem = [false, false, false, false]
    newOpenMenuItem[i] = !openMenuItem[i]
    setOpenMenuItem(newOpenMenuItem)
  }
  const resetOpenMenuItem = () => setOpenMenuItem([false, false, false, false])

  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState('ja');
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const closeMenu = () => setIsOpenMenu(false)

  const components = [
    {
      title: null,
      component: Top,
      path: "/top",
    },
    {
      title: '研究室について',
      component: AboutUs,
      path: "/research/about_us",
    },
    {
      title: '卒業テーマ',
      component: GraduationResearchThemes,
      path: "/research/graduation_research_themes",
    },
    {
      title: '国際交流',
      component: InternationalRelations,
      path: "/research/international_relations",
    },
    {
      title: 'ニュース',
      component: News,
      path: "/research/news",
    },
    {
      title: '論文集',
      component: Publications,
      path: "/publication_list",
    },
    {
      title: 'ITスペシャリストプログラム',
      component: ItSpecialistProgram,
      path: "/it_specialist_program",
    },
    {
      title: '卒業生',
      component: Gaduated,
      path: "/members/gaduated",
    },
    {
      title: 'メンバー',
      component: Members,
      path: "/members/member",
    },
    {
      title: '学生募集',
      component: ProspectiveStudents,
      path: "/members/prospective_students",
    },
    {
      title: '業績',
      component: Achievements,
      path: "/achievements/achievements",
    },
    {
      title: '国際学会',
      component: ConferencesAndWorkshops,
      path: "/achievements/conferences_and_workshops",
    },
    {
      title: 'ギャラリー',
      component: InternationlConferences,
      path: "/others/internationl_conferences",
    },
    {
      title: 'アクセス統計',
      component: Statistics,
      path: "/others/statistics",
    },
    {
      title: '開発者',
      component: Developers,
      path: "/others/developers",
    },
  ]

  // メニューアイテムの切り替え
  const [selectedItem, setSelectedItem] = useState(null);
  const selectMenuItem = (itemName) => {
    // 選択中のアイテムが切り替わった場合
    if (selectedItem !== itemName) {
      resetOpenMenuItem()
      setSelectedItem(itemName)
    }
  }

  return (
    <Router>
      <div>
        <header className={`header ${isOpenMenu ? "open" : ""}`}>
          <nav>
            <ul className="menu">
              <li className={`menu_item ${selectedItem === 'Top' ? 'active' : ''}`}>
                <Link to="/top"
                  onClick={() => { selectMenuItem('Top') }}
                >{t('Top')}</Link>
              </li>

              <li className={`menu_item noLink ${selectedItem === '研究' ? 'active' : ''}`}
                onClick={() => changeOpenMenuItem(0)}
              >
                <a
                  onClick={() => { selectMenuItem('研究') }}
                // onMouseLeave={(e) => { selectMenuItem(e) }}
                >
                  {t('研究')}
                  <FontAwesomeIcon icon={faSortDown} />
                </a>
                {openMenuItem[0] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/research/about_us" onClick={closeMenu}>{t('研究室について')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/research/graduation_research_themes" onClick={closeMenu}>{t('卒業テーマ')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/research/international_relations" onClick={closeMenu}>{t('国際交流')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/research/news" onClick={closeMenu}>{t('ニュース')}</Link>
                    </li>
                  </ul>
                }
              </li>


              <li className={`menu_item ${selectedItem === '論文集' ? 'active' : ''}`}>
                <Link to="/publication_list"
                  onClick={() => {
                    selectMenuItem('論文集')
                    closeMenu()
                  }}
                >{t('論文集')}</Link>
              </li>

              <li className={`menu_item noLink ${selectedItem === '教育' ? 'active' : ''}`}
                onClick={() => changeOpenMenuItem(1)}>
                <a
                  onClick={() => { selectMenuItem('教育') }}
                >{t('教育')}<FontAwesomeIcon icon={faSortDown} /></a>
                {openMenuItem[1] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/it_specialist_program" onClick={closeMenu}>{t('ITスペシャリストプログラム')}</Link>
                    </li>
                  </ul>
                }
              </li>

              <li className={`menu_item noLink ${selectedItem === 'メンバー' ? 'active' : ''}`}
                onClick={() => changeOpenMenuItem(2)}>
                <a
                  onClick={() => { selectMenuItem('メンバー') }}
                >{t('メンバー')}<FontAwesomeIcon icon={faSortDown} /></a>
                {openMenuItem[2] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/members/member" onClick={closeMenu}>{t('メンバー')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/members/gaduated" onClick={closeMenu}>{t('卒業生')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/members/prospective_students" onClick={closeMenu}>{t('学生募集')}</Link>
                    </li>
                  </ul>
                }
              </li>

              <li className={`menu_item noLink ${selectedItem === '業績' ? 'active' : ''}`}
                onClick={() => changeOpenMenuItem(3)}>
                <a
                  onClick={() => { selectMenuItem('業績') }}
                >{t('業績')}<FontAwesomeIcon icon={faSortDown} /></a>
                {openMenuItem[3] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/achievements/achievements" onClick={closeMenu}>{t('業績')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/achievements/conferences_and_workshops" onClick={closeMenu}>{t('国際学会')}</Link>
                    </li>
                  </ul>
                }
              </li>

              <li className={`menu_item noLink ${selectedItem === 'その他' ? 'active' : ''}`}
                onClick={() => changeOpenMenuItem(4)}>
                <a
                  onClick={() => { selectMenuItem('その他') }}
                >{t('その他')}<FontAwesomeIcon icon={faSortDown} /></a>
                {openMenuItem[4] &&
                  <ul className="menu_list">
                    <li className="menu_item">
                      <Link to="/others/internationl_conferences" onClick={closeMenu}>{t('ギャラリー')}</Link>
                    </li>
                    <li className="menu_item">
                      <a href="https://www.u-aizu.ac.jp/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>{t('会津大学')}</a>
                    </li>
                    <li className="menu_item">
                      <a href="https://www.u-aizu.ac.jp/access/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>{t('大学へのアクセス')}</a>
                    </li>
                    <li className="menu_item">
                      <Link to="/others/statistics" onClick={closeMenu}>{t('アクセス統計')}</Link>
                    </li>
                    <li className="menu_item">
                      <Link to="/others/developers" onClick={closeMenu}>{t('開発者')}</Link>
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

          <div className="hamburger"
            onClick={() => {
              setIsOpenMenu(!isOpenMenu)
            }}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </header>

        <Switch>
          {components.map((component, i) => {
            return (
              <Route key={i} path={component.path}>
                <Layout title={t(component.title)} path={component.path}>
                  <component.component />
                </Layout>
              </Route>
            )
          })}
        </Switch>

        <footer className="footer">
          (c) 2015-2020 Software Engineering Lab, The University of Aizu
        </footer>
      </div>
    </Router>
  );
}

export default App