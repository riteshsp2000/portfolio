import React from 'react';

// Libraries
import {LocationProvider} from '@reach/router';
import {Helmet} from 'react-helmet';
import {MDXProvider} from '@mdx-js/react';

// Fonts
import WotfardRegular from '@fonts/wotfard-regular-webfont.woff2';
import WotfardLight from '@fonts/wotfard-light-webfont.woff2';
import WotfardBold from '@fonts/wotfard-medium-webfont.woff2';

// Components/Configuration
import {ThemeProvider} from '@theme';
import {Ul, Li, P3} from '@components';

// Assets
import '@theme/globalStyles.css';

// List of Components
// - H1, H2, H3
// - P1, P2, P3
// - Images
// - Code
// - Quote
// - Ordered and Unordered List
// - Links

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
      <MDXProvider
        components={{
          ul: Ul,
          li: Li,
          p: P3,
        }}
      >
        {children}
      </MDXProvider>
    </ThemeProvider>
  </LocationProvider>
);

export default App;
