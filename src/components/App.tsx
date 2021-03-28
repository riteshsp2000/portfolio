import React from 'react';

// Components/Configuration
import {ThemeProvider, GlobalStyles} from '../theming';

function App({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default App;
