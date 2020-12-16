import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: "\"Roboto\", sans-serif",
      fontWeightLight: '600',
    },
    palette: {
      type: "light",
      text: {
        primary: "#222222",
      },
      primary: {
        main: '#EB5757',
      },
      mainPage: {
        minHeight: '100vh',
        padding: '2% 4%',
        flexGrow: 1,
        boxSizing: 'border-box',
        textAlign: 'center',
        margin: 'auto',
        overflowY: 'hidden',
      },
      fullHeight: {
        minHeight: '100vh',
      },
    },
    overrides: {
      MuiInput: {
        input: {
          "&::placeholder": {
            color: '#EB5757'
          },
          color: '#EB5757',
        }
      }
    },
});

export { theme };
