import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greeting from './greeting';
import HomePage from './home';
import Login from './login';
import HowItWorks from './howItWorks';
import BattleOrders from './battleOrders';
import BattleSubmission from './battleSubmission';
import EnterBattle from './enterBattle';
import Contenders from './contenders';
import SiteNav from './siteNav';
import SiteNavOverlay from './siteNavOverlay';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <section>
          <SiteNav />
          <Route exact path="/" component={Greeting} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/howItWorks" component={HowItWorks} />
          <Route exact path="/battleOrders" component={BattleOrders} />
          <Route exact path="/enterBattle" component={EnterBattle} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/contenders" component={Contenders} />
          <Route exact path="/BattleSubmission" component={BattleSubmission} />
          <SiteNavOverlay />
        </section>
      </Router>
    );
  }
}
