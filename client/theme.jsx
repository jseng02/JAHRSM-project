import { createMuiTheme } from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: blue[700],
      main: blue[700],
      dark: blue[1500], // Adjusted to a darker shade
    },
    secondary: {
      light: pink[200],
      main: pink[500],
      dark: pink[900],
    },
    openTitle: 'Blue',
    protectedTitle: pink['900'],
    type: 'light',
  },
});

export default theme;
