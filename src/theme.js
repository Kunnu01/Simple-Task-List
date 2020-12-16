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
            padding: '2%',
            paddingTop: '6%',
            flexGrow: 1,
            boxSizing: 'border-box',
        },
        fullHeight: {
            minHeight: '100vh',
        },
    },
});

export { theme };
