import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import CssBaseline from '@material-ui/core/CssBaseline';

import backgroundVid from './assets/videos/backgroundVid.mp4';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <header>
          <h1>
            Hello World
          </h1>
        </header>
        <div className='background'>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;