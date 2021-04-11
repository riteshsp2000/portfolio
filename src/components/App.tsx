import React from 'react';

// Libraries
import {LocationProvider} from '@reach/router';

// Components/Configuration
import {ThemeProvider, GlobalStyles} from '../theming';
import Head from './Head';

const App: React.FC = ({children}) => (
  <LocationProvider>
    <Head />

    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </LocationProvider>
);

export default App;
