import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import landingPageStyles from "./landingPageStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid/Grid";
import Blur from 'react-blur';
import code from '../../images/code.png';

class LandingPage extends React.Component {
  resizeUpdate = () => {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  constructor(props){
    super(props);
    this.state = {width: window.innerWidth, height: window.innerHeight};
    window.addEventListener("resize", this.resizeUpdate);
  }

  topPadding = () => {
    const {height} = this.state;
    if(height > 600)
      return height/3;

    if(height < 600)
      return 0;
  };

  render () {
    const {classes} = this.props;
    const {height, width} = this.state;
    const activities = ["developer",
      "tinkerer",
      "learner",
      "hiker",
      "gamer",
      "builder",
      "mentor",
      "volunteer",
    ];
    console.log(this.props);
    return (
      <Blur img={code} blurRadius={10} enableStyles className={classes.introBackground}>
        <Grid container direction={"column"} className={classes.introContainer}
              style={{paddingTop: this.topPadding()}}>
          <Typography
            variant={width < 600
              ? "h3"
              : "h2"}
            className={classes.introTextHeader}
            style={height>600
              ? {paddingBottom: "50px"}
              : {}
            }
          >
            Alain Dupuis
          </Typography>
          {activities.map((activity, index) =>
            <Typography
              key={index+1}
              variant={"headline"}
              className={classes.introText}
              style={{opacity: 1 - (index/activities.length)}}
            >
              {activity}
            </Typography>
          )}
        </Grid>
      </Blur>
    );
  }
}

export default withStyles(landingPageStyles)(LandingPage);