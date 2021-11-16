import React from 'react';

// Components
import {App, PageContainer} from './src/components';

export const wrapPageElement = ({element}) => (
  <App>
    <PageContainer>{element}</PageContainer>
  </App>
);
