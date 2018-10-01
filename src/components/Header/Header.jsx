import React from 'react';
import {AppBar, Button, Grid, Typography, withStyles} from '@material-ui/core';

class Header extends React.Component {
  render() {
    console.log(this.props);
    return(
    <Grid item xs={12}>
      <AppBar position={"static"}>
        <Grid container direction={"row"}>
          <Grid item xs={3}>
            <Button>
              <Typography>
                o no
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={9}>
            <Button>
              <Typography>
                o yes
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </Grid>
    );
  }
}

export default Header;