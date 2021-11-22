import ReactDOM from 'react-dom';
import { App } from './App';
import { createTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

const darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
