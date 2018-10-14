import React from 'react';
import AppBar from '@material-ui/core/AppBar/'
import Grid from '@material-ui/core/Grid/'
import withStyles from '@material-ui/core/styles/withStyles';
import FaceIcon from '@material-ui/icons/FaceTwoTone';
import CodeIcon from '@material-ui/icons/CodeTwoTone';
import MemoryIcon from '@material-ui/icons/Memory';
import headerStyles from "./headerStyles";

class Header extends React.Component {
  render() {
    const {classes}= this.props;
    return(
      <AppBar position={"static"} className={classes.headerAppBar}>
        <Grid container direction={"row"} className={classes.headerContainer}>
          <FaceIcon className={classes.headerIcon}/>
          <CodeIcon className={classes.headerIcon}/>
          <MemoryIcon className={classes.headerIcon}/>
        </Grid>
      </AppBar>
    );
  }
}

export default withStyles(headerStyles)(Header);
