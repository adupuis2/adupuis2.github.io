import {createStyles} from '@material-ui/core';

const landingPageStyles = (theme) =>
  createStyles({

    introBackground: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100vh",
      zIndex: 1,
    },

    introContainer: {
      alignItems: "center",
      justifyContent: "flex-start",
      height: "100%",
      width: "100%",
    },

    introTextHeader: {
      alignItems: "center",
      color: theme.palette.common.white,
      fontWeight: 100,
      justifyContent: "center",
      position: "relative",
      zIndex: 2,
    },

    introText: {
      fontWeight: 100,
      zIndex: 2,
      color: theme.palette.common.white,
    },
  });

export default landingPageStyles;

