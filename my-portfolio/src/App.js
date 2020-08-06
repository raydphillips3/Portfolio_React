import React, { Component } from "react";

import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // Link
} from "react-router-dom";


// Pages
import Landpage from "./components/Portfolio/Portfolio";
import Pager from "./components/resume/Resume";
import Tacts from "./components/Contacts/Contacts";
import Aboutpage from "./components/About/About";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Portfolio_React/" component={Landpage} />
          <Route exact path="/Portfolio_React/resume" component={Pager} />
          <Route exact path="/Portfolio_React/about" component={Aboutpage} />
          <Route exact path="/Portfolio_React/contacts" component={Tacts} />
        </Switch>
    </Router>
  );
}
}

export default App;
