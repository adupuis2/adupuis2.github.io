import React, { Component } from "react";
import Header from "./components/common/Header/";
import { createMuiTheme, Grid, MuiThemeProvider } from "@material-ui/core";
import lightBlue from "@material-ui/core/colors/lightBlue";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import { hot } from "react-hot-loader";

const appTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: lightBlue,
    secondary: pink,
    error: red,
    contrastThreshold: 5,
    tonalOffset: 0.5
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={appTheme}>
        <Header />
      </MuiThemeProvider>
    );
  }
}
export default hot(module)(App);
