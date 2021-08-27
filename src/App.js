import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Header from './components/Header';

import backgroundVid from './assets/videos/backgroundVid.mp4';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router>
          <Header />

          <Switch>
            <Route path = '/Home'>

            </Route>
            <Route path='/About'>

            </Route>
            <Route path='/Contact'>

            </Route>
            <Route path='/Projects'>

            </Route>
            <Route path='/Resume'>

            </Route>
          </Switch>
          <div className='background'>
          </div>
        </Router>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;