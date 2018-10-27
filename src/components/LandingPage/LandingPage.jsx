import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import landingPageStyles from "./landingPageStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid/Grid";
import Blur from 'react-blur';
import code from '../../images/code.png';

const MYNAME = 'Alain Dupuis';
const activities = ["developer",
  "tinkerer",
  "hiker",
  "dogs' best friend",
  "gamer",
  "builder",
  "dork",
  "mentor",
  "student",
  "volunteer",
];

class LandingPage extends React.Component {
  render () {
    const {classes} = this.props;
    console.log(this.props);
    return (
      <Blur img={code} blurRadius={10} enableStyles className={classes.introBackground}>
        <Grid container direction={"column"} className={classes.introContainer}>
            <Typography className={classes.introTextHeader}>
              {MYNAME}
            </Typography>

              {
                activities.map((activity, index) =>
                  <Typography
                    key={index+1}
                    className={classes.activityText}
                    style={{opacity: 1 - (index/activities.length)}}
                  >
                    {activity}
                  </Typography>
                )
              }
        </Grid>
      </Blur>
    );
  }
}

export default withStyles(landingPageStyles)(LandingPage);