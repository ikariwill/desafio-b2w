import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home';
import Planets from './pages/Planets';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/planets" component={Planets} />
      </Switch>
    </Router>
  );
}