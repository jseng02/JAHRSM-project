import { createMuiTheme } from '@material-ui/core/styles';
import { red, blue, green, purple, yellow, teal, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: teal[200],
      main: teal[500],
      dark: teal[800],
    },
    secondary: {
      light: pink[200],
      main: pink[500],
      dark: pink[800],
    },
    openTitle: 'green',
    protectedTitle: pink['600'],
    type: 'light',
  },
});

export default theme;
