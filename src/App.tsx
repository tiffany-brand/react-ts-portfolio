import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
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
        <Hero />
        <About />
      </ThemeProvider>
    </div>
  );
}

export default App;
