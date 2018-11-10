import {createStyles} from '@material-ui/core';

const landingPageStyles = (theme) =>
  createStyles({

    contentContainer: {
      alignItems: "center",
      filter: 'blur(0)',
      justifyContent: "center",
      width: "100%",
      height: "100vh",
      zIndex: 10,
    },

    introTextHeader: {
      color: theme.palette.common.white,
      fontWeight: 400,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: "calc(34px + 3vw)",
      },
      [theme.breakpoints.between('sm', 'xl')]: {
        fontSize: "52px",
      },
      // alignItems: "center",
      // justifyContent: "center",
      // position: "relative",
      zIndex: 150,
    },

    slotContainer: {
    },

    activityText: {
      color: theme.palette.common.white,
      [theme.breakpoints.between('xs', 'sm')]: {
        fontSize: "calc(20px + 1vw)",
      },
      [theme.breakpoints.between('md', 'xl')]: {
        fontSize: "30px",
      },
      fontWeight: 100,
    },
  });

export default landingPageStyles;

