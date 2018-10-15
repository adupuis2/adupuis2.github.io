import {createStyles} from '@material-ui/core';

const rootRouterStyles = (theme) =>
  createStyles({
    content: {
      alignSelf: "stretch",
      backgroundColor: theme.palette.grey["200"],
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderRight: `1px solid ${theme.palette.divider}`,
      margin: theme.spacing.unit/2,
      width: `calc(100% - ${theme.spacing.unit}px)`,
    },
    footer: {
      alignSelf: "flex-end",
      backgroundColor: theme.palette.grey["200"],
      borderTop: `1px solid ${theme.palette.divider}`,
      margin: theme.spacing.unit/2,
      height: "50px",
      width: `calc(100% - ${theme.spacing.unit}px)`,
    },
    rootGrid: {
      alignContent: "flex-start",
      backgroundColor: theme.palette.secondary["50"],
      display: "grid",
      height: "100vh",
    },
  });

export default rootRouterStyles;

