import React from "react";
import DashBoard from "./DashBoard/Index";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Staff from "./Staff/Staff";

const appStyle = {
  container: {
    marginLeft: 90,
    border: "1px solid black"
  }
};

function App() {
  return (
    <>
      <Router>
        <Nav />
        <div style={appStyle.container}>
          <ScrollToTop>
            <Switch>
              <Route
                exact
                path="/"
                render={props => <DashBoard {...props} />}
              />
              <Route
                exact
                path="/staff"
                render={props => <Staff {...props} />}
              />
            </Switch>
          </ScrollToTop>
        </div>
      </Router>
    </>
  );
}

export default App;
