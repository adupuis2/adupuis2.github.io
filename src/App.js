import React, { Component } from 'react';
import Header from './components/common/Header/';
import {createMuiTheme, Grid, MuiThemeProvider} from '@material-ui/core';
import {hot} from 'react-hot-loader';

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

export default hot(module)(App);
