import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import { ajaxCall } from './AjaxCall.js';
import TweetIndexView from './TweetIndexView.js';
import ChartComponent from './ChartComponent.js';


export default class GenericView extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink to="/">Recent Tweets</NavLink>
            </li>
            <li >
              <NavLink to="/chart">Chart</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={TweetIndexView}/>
            <Route path="/chart" component={ChartComponent}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
