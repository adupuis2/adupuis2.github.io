import {createStyles} from '@material-ui/core';
import code from '../../images/code.png';

const rootRouterStyles = (theme) =>
  createStyles({
    background: {
      height: '100vh',
      left: '0',
      overflow: 'hidden',
      position: 'static',
      top: '0',
      width: '100vw',
    },
    content: {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      // zIndex: 2,
    },
    introBackground: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100vh",
    },
  });

export default rootRouterStyles;

