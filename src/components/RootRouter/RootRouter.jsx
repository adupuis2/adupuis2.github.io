import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import rootRouterStyles from "./rootRouterStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Link, Route} from 'react-router-dom';
import {Switch} from 'react-router';

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
        <Route exact path={`/`} render={()=><Link to={"/2"}><Typography>one</Typography></Link>} />
        <Route exact path={`/2`} render={()=><Typography>two</Typography>} />
      </Switch>
    );
  }
}

export default withStyles(rootRouterStyles)(RootRouter);