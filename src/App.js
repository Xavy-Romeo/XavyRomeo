import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './pages/Home';
import Content from './pages/Content';
import Header from './components/Header';
import Footer from './components/Footer';
import theme from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Header />

          <Switch>
            <Route path = '/Home' component={Home} />
            
            
            <Route path='/About' component={Content}>

            </Route>
            <Route path='/Contact'>

            </Route>
            <Route path='/Projects'>

            </Route>
            <Route path='/Resume'>

            </Route>
          </Switch>
          
          <Footer />
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;