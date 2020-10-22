import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./home"
import Research from "./research/research"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/research">Research</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/research">
            <Research />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}