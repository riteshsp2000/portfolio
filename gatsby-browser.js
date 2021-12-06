import React from 'react';

// Components
import {App, Layout} from './src/components';

export const wrapPageElement = ({
  element,
  props: {
    location: {pathname},
  },
}) => (
  <App>
    <Layout pathname={pathname}>{element}</Layout>
  </App>
);

// export const shouldUpdateScroll = (prevRouterProps, {location}) => {
//   window.scrollTo(0, 0);
//   const body = document.getElementsByTagName('body')[0];
//   body.scrollTop = 0;
//   return false;
// };
