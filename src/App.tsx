import React from "react";
import { Header } from "./components/Header";
import { pages } from "./constants/pageNavigation";
import { MaxMultiplierForm } from "./components/MaxMultiplierForm";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header activePage="maxMultiplier" pages={pages}>
        <div className="flex flex-col h-full items-center justify-center ">
          <Switch>
            {Object.entries(pages).map(
              ([_, { route, emptyRoute, Component }]) => [
                <Route path={route}>
                  <Component />
                </Route>,
                <Route path={emptyRoute}>
                  <Component />
                </Route>,
              ]
            )}
            <Route path="/">
              <MaxMultiplierForm />
            </Route>
          </Switch>
        </div>
      </Header>
    </Router>
  );
}

export default App;
