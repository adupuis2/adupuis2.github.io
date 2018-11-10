import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import landingPageStyles from "./landingPageStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";

const MYNAME = 'Alain Dupuis';

class LandingPage extends React.Component {
  render () {
    const {classes} = this.props;
    console.log(this.props);
    return (
      <Grid container direction={"row"} className={classes.contentContainer}>
        <Grid item>
          <Typography color={"error"}>Nav cards</Typography>
        </Grid>
        <Grid item>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
          <Card>
            <CardHeader title="Content panel" className={classes.introTextHeader}/>
            <CardContent>
              <Typography>
                Placeholder content.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(landingPageStyles)(LandingPage);