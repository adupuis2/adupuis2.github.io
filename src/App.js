import React from "react";
import { createMuiTheme, Grid, MuiThemeProvider } from "@material-ui/core";
import Header from "./components/common/Header/Header.jsx";
import lightBlue from "@material-ui/core/colors/lightBlue";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";
import { AppContainer, hot } from "react-hot-loader";
import { HashRouter as Router } from "react-router-dom";
import RootRouter from "./components/RootRouter";
import history from "./history";

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

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <MuiThemeProvider theme={appTheme}>
          <Router>
            <RootRouter />
          </Router>
        </MuiThemeProvider>
      </AppContainer>
    );
  }
}
export default hot(module)(App);
