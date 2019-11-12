import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainLayout } from "./components/MainLayout";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Certificate } from "./components/Certificate";
import { Technologies } from "./components/Technologies";
import { NoMatch } from "./components/NoMatch";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Root} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/certificate"} component={Certificate} />
            <Route exact path={"/technologies"} component={Technologies} />
            <Route component={NoMatch} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
