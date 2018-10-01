import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import {Grid }from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Grid container xs={12} className="App">
        <Grid item sx={12}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Testing webpack dev server.
        </p>
        </Grid>
      </Grid>
    );
  }
}

export default App;
