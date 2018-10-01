import React, { Component } from 'react';
import logo from './images/logo.svg';
import appStyles from './appStyles';
import Header from './components/Header/';
import {createMuiTheme, Grid, MuiThemeProvider} from '@material-ui/core';

const appTheme = createMuiTheme({
  palette: {
    type: "dark",
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
