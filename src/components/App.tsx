import React from 'react';

// Libraries
import {LocationProvider} from '@reach/router';
import {Helmet} from 'react-helmet';

// Fonts
import WotfardRegular from '../fonts/wotfard-regular-webfont.woff2';
import WotfardLight from '../fonts/wotfard-light-webfont.woff2';
import WotfardBold from '../fonts/wotfard-medium-webfont.woff2';

// Components/Configuration
import {ThemeProvider, GlobalStyles} from '../theming';

const App: React.FC = ({children}) => (
  <LocationProvider>
    <Helmet>
      <link
        rel="preload"
        as="font"
        href={WotfardBold}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={WotfardLight}
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={WotfardRegular}
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Helmet>

    <ThemeProvider>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </LocationProvider>
);

export default App;
