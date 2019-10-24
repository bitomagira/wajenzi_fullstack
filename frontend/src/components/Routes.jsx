import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import EntrepreneurRegister from "./EntrepreneurRegister";
import Landing from "./Landing";
import InvestorRegister from "./InvestorRegister";

class Routes extends Component {
  state = {};
  render() {
    console.log("routes");
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Home} />
          <Route
            path="/EntrepreneurRegister"
            exact
            component={EntrepreneurRegister}
          />
          <Route path="/InvestorRegister" exact component={InvestorRegister} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
