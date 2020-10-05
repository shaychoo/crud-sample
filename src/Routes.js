import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutSideBarComponent from "./layout/LayoutSideBarComponent";
import LayoutMainComponent from "./layout/LayoutMainComponent";
import MainPage from "./pages/Main/MainPage";
export default function Routes() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <LayoutMainComponent>
      <MainPage></MainPage>
    </LayoutMainComponent>
  );
}

function About() {
  return (
    <LayoutSideBarComponent>
      <div>About Route</div>
    </LayoutSideBarComponent>
  );
}

function Users() {
  return (
    <LayoutSideBarComponent>
      <div>Users Route</div>
    </LayoutSideBarComponent>
  );
}
