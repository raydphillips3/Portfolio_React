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
import Homepage from "./components/Portfolio/Portfolio";
import Pager from "./components/resume/Resume";
import Tacts from "./components/Contacts/Contacts";
import Aboutpage from "./components/About/About";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/resume" component={Pager} />
          <Route exact path="/about" component={Aboutpage} />
          <Route exact path="/contacts" component={Tacts} />
        </Switch>
    </Router>
  );
}
}

export default App;
