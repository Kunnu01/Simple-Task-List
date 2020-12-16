
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from './theme'
import { store } from './store'
import { NavBar } from './components/NavBar'
import { TinyList } from './containers/TinyList'

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <main style={theme.palette.mainPage}>
          <TinyList />
        </main>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
