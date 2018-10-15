import React from 'react';
import Grid from '@material-ui/core/Grid/'
import withStyles from '@material-ui/core/styles/withStyles';
import FaceIcon from '@material-ui/icons/FaceTwoTone';
import CodeIcon from '@material-ui/icons/CodeTwoTone';
import MemoryIcon from '@material-ui/icons/Memory';
import headerStyles from "./headerStyles";
import Typography from "@material-ui/core/Typography/Typography";
import classNames from 'classnames';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    }
  }

  updateWidth = () => {
    this.setState({windowWidth: window.innerWidth});
  };

  componentDidMount(){
    window.addEventListener("resize", this.updateWidth);
  }

  render() {
    const {classes}= this.props;
    return(
        <Grid
        container
        direction={"row"}
        className={
          classNames(
            classes.headerContainer,
            {
              [classes.centerHorizontal]: this.state.windowWidth < 600,
            }
          )}>
          <FaceIcon className={classes.headerIcon} />
          <Typography variant={"title"}>
            Alain Dupuis – Developer
          </Typography>
        </Grid>
    );
  }
}

export default withStyles(headerStyles)(Header);
