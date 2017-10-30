import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './home';
import Login from './login';
import BattleSubmission from './battleSubmission';
import BattleCreation from './battleCreation';
import EnterBattle from './enterBattle';
import Contenders from './contenders';
import HowItWorks from './howItWorks';
import UserProfileEdit from './userProfileEdit';
import SiteNav from './siteNav';
import SiteNavOverlay from './siteNavOverlay';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <section>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/userProfileEdit" component={UserProfileEdit} />
          <Route exact path="/howItWorks" component={HowItWorks} />
          <Route exact path="/enterBattle" component={EnterBattle} />
          <Route exact path="/contenders" component={Contenders} />
          <Route exact path="/battleSubmission" component={BattleSubmission} />
          <Route exact path="/battleCreation" component={BattleCreation} />
          <SiteNav />
          <SiteNavOverlay />
        </section>
      </Router>
    );
  }
}