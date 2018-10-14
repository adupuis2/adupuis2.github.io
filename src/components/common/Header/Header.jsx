import React from 'react';
import {AppBar, Button, Grid, Typography, withStyles} from '@material-ui/core';
import {withTheme} from '@material-ui/core';

class Header extends React.Component {
  render() {
    const btnStyle={
      border: '1px solid yellow',
    };
    return(
      <Grid item xs={12}>
        <AppBar position={"static"}>
          <Grid container direction={"row"}>
            <Grid
              item
              xs={3}
            >
              <Typography>
                1/4 Width.
              </Typography>
              <Button style={{...btnStyle}}>
                <Typography>
                  Test button one
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              xs={9}
            >
              <Typography>
                3/4 Width.
              </Typography>
              <Button style={{...btnStyle}}>
                <Typography>
                  Test button two
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      </Grid>
    );
  }
}

export default withTheme()(Header);