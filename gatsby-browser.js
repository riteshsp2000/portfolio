import React from 'react';
import {App} from './src/components';

export const wrapRootElement = ({element}) => {
  return <App>{element}</App>;
};
