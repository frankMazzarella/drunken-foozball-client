import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ResponsiveDrawer from './ResponsiveDrawer';
import FirebaseService from './services/Firebase.serivce';

FirebaseService.init();

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
