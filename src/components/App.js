import React from "react";
import DashBoard from "./DashBoard/DashBoard";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./Other/ScrollToTop";
import Staff from "./Staff/Staff";
import Service from "./Service/Service";
import Settings from "./Settings/Settings";

const appStyle = {
  container: {
    marginLeft: 90
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
                path="/schedule"
                render={props => <DashBoard {...props} />}
              />
              <Route
                exact
                path="/schedule/staff"
                render={props => <Staff {...props} />}
              />
              <Route
                exact
                path="/schedule/service"
                render={props => <Service {...props} />}
              />
              <Route
                exact
                path="/schedule/settings"
                render={props => <Settings {...props} />}
              />
            </Switch>
          </ScrollToTop>
        </div>
      </Router>
    </>
  );
}

export default App;
