import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import Header from './components/Header';

import CssBaseline from '@material-ui/core/CssBaseline';

import backgroundVid from './assets/videos/backgroundVid.mp4';

function App() {

  


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Header/>
        <div className='background'>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;