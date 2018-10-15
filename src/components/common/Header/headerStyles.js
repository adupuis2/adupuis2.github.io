import {createStyles} from "@material-ui/core";

const headerStyles = (theme) =>
  createStyles({
    centerHorizontal: {
      justifyContent: "center",
    },
    headerAppBar: {
      width: `calc(100% - ${theme.spacing.unit*2}px)`,
      margin: theme.spacing.unit,
    },
    headerContainer: {
      alignItems: "center",
      padding: theme.spacing.unit,
      borderBottom: `1px solid ${theme.palette.primary["300"]}`,
    },
    headerElement: {
      display: 'flex',
    },
    headerIcon: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      height: theme.spacing.unit*5,
      width: theme.spacing.unit*5,
    },
    profileIconContainer: {
      alignItems: "center",
      width: theme.spacing.unit*5,
    },
  });

export default headerStyles;