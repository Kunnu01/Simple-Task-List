
import { Fragment } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <NavBar />
      </MuiThemeProvider>
    </Fragment>
  );
}

export default App;
