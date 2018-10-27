import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from "../LandingPage";
import Home from "../Home";
import { Redirect, Switch } from "react-router";

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