import React from 'react';
import Header from './components/Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#005176',
    },
    secondary: {
      main: '#acd7eb',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
