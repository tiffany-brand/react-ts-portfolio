import React from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';
import Footer from './components/Footer';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
