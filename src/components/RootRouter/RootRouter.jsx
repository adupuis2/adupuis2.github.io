import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from "../LandingPage";
import Home from "../Home";
import { Redirect, Switch } from "react-router";
import { Grid, withStyles } from "@material-ui/core";
import rootRouterStyles from "./rootRouterStyles";
import Blur from "react-blur";
import code from '../../images/code.png';

class RootRouter extends React.Component {
  render () {
    const {classes} = this.props;
    return (
      <Grid container>
        <Blur img={code} blurRadius={4} enableStyles className={classes.background}>
        </Blur>
          <Grid item className={classes.content}>
            <Switch>
              <Route exact path={`/runway`} component={LandingPage}/>
              <Route exact path={`/home`} component={Home}/>
              <Route path={`/*`} render={() => <Redirect to={`/runway`}/>}/>
            </Switch>
          </Grid>
      </Grid>
    );
  }
}

export default withStyles(rootRouterStyles)(RootRouter);