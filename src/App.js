
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme'
import { store } from './store'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <NavBar />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
