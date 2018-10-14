import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import rootRouterStyles from "./rootRouterStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import Header from "../common/Header/index.js";

class RootRouter extends React.Component {

  Thingy ({match}) {
    return (
      <Typography>
        Thingy.
      </Typography>
    )
  }

  render () {
    console.log(this.props);
    return (
      <Switch>
        <Route exact path={`/1`} render={()=><Link to={"/2"}><Typography>one</Typography></Link>} />
        <Route exact path={`/2`} render={()=><Typography>two</Typography>} />
        <Route exact path={`/ok`} component={Header} />
      </Switch>
    );
  }
}

export default withStyles(rootRouterStyles)(RootRouter);