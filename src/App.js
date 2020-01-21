import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import ResponsiveDrawer from './ResponsiveDrawer';

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
