import React, { Component } from 'react';
import {createMuiTheme, Grid, MuiThemeProvider} from '@material-ui/core';

const appTheme = createMuiTheme({
  palette: {
    type: "light",
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={appTheme}>
        <Grid container className="App">
          <Header />
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
