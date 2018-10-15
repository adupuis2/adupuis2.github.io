import Grid from "@material-ui/core/Grid/Grid";
import homeStyles from "./homeStyles";
import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

class Home extends React.Component {

  render () {
    const {classes} = this.props;
    return (
      <Grid item xs={12} container direction={"row"} className={classes.content}>
        <Grid item xs={12}>
          <Typography>
            Dis sum stof for main content panel.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Bla bla bla.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            So much content. Wow.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(homeStyles)(Home);