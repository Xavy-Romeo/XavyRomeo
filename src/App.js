import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Page404 from './pages/Page404';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './theme';
import SectionContext from './contexts/SectionContext';

function App() {

  const [ currentSection, setCurrentSection ] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
            <Header />
            <Switch>
              <Route path = '/' component={Home} exact />
              <Route path = '/XavyRomeo' component={Home} exact/>
              <Route path = '/Home' component={Home} exact />
              <Route path ='/Portfolio' component={Portfolio} exact />
              <Route path ='/XavyRomeo/Portfolio' component={Portfolio} exact />
              <Route path = '*' component={Page404} />
            </Switch>      
            <Footer />
          </SectionContext.Provider>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;