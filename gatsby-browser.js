import React from 'react';

// Components
import {App, Layout} from './src/components';

export const wrapPageElement = ({element}) => (
  <App>
    <Layout>{element}</Layout>
  </App>
);
