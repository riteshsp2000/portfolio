import React from 'react';

// Libraries
import {Helmet} from 'react-helmet';

// Components/Configuration
import {ThemeProvider, GlobalStyles} from '../../theming';

function App({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="en" />
        <title>Ritesh Patil</title>
        <link rel="canonical" href="http://ritesh-patil.com" />
      </Helmet>

      <ThemeProvider>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
}

export default App;
