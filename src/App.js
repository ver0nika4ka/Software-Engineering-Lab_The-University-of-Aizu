import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Top from "./pages/top/Top"
// research
import AboutUs from "./pages/research/AboutUs"
import GraduationResearchThemes from "./pages/research/GraduationResearchThemes"
import InternationalRelations from "./pages/research/InternationalRelations"
import News from "./pages/research/News"
// publication_list
import Publications from "./pages/publication_list/Publications"
// education
import ItSpecialistProgram from "./pages/education/ItSpecialistProgram"
// members
import Gaduated from "./pages/members/Gaduated"
import Members from "./pages/members/Members"
import ProspectiveStudents from "./pages/members/ProspectiveStudents"
// achievements
import Achievements from "./pages/achievements/Achievements"
import ConferencesAndWorkshops from "./pages/achievements/ConferencesAndWorkshops"
// others
import InternationlConferences from "./pages/others/InternationlConferences"
import Statistics from "./pages/others/Statistics"
import Developers from "./pages/others/Developers"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div >
        <header className="header">
          <nav>
            <ul>
              <li>
                <Link to="/top">TOP</Link>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/research/about_us">研究室について</Link>
                  </li>
                  <li>
                    <Link to="/research/graduation_research_themes">卒業テーマ</Link>
                  </li>
                  <li>
                    <Link to="/research/international_relations">国際交流</Link>
                  </li>
                  <li>
                    <Link to="/research/news">ニュース</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/publication_list">論文集</Link>
              </li>
              <li>
                <Link to="/it_specialist_program">ITスペシャリストプログラム</Link>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/members/member">メンバー</Link>
                  </li>
                  <li>
                    <Link to="/members/gaduated">卒業生</Link>
                  </li>
                  <li>
                    <Link to="/members/prospective_students">学生募集</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/achievements/achievements">業績</Link>
              </li>
              <li>
                <Link to="/achievements/conferences_and_workshops">国際学会</Link>
              </li>
              <li>
                <ul>
                  <li>
                    <Link to="/others/internationl_conferences">ギャラリー</Link>
                  </li>
                  <li>
                    <a href="https://www.u-aizu.ac.jp/" target="_blank">会津大学</a>
                  </li>
                  <li>
                    <a href="https://www.u-aizu.ac.jp/access/" target="_blank">大学へのアクセス</a>
                  </li>
                  <li>
                    <Link to="/others/statistics">アクセス統計</Link>
                  </li>
                  <li>
                    <Link to="/others/developers">開発者</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/top">
            <Top />
          </Route>
          <Route path="/research/about_us">
            <AboutUs />
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