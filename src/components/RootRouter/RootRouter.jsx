import React from 'react';
import {Route} from 'react-router-dom';
import { Redirect, Switch } from "react-router";
import Home from "../Home/index.js";
import LandingPage from "../LandingPage/index.js";

class RootRouter extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path={`/runway`} component={LandingPage} />
        <Route exact path={`/home`} component={Home} />
        <Route path={`/*`} render={()=><Redirect to={`/runway`}/>} />
      </Switch>
    );
  }
}

export default RootRouter;