import React from 'react';
import {App} from './src/components';

export const wrapPageElement = ({element}) => {
  return <App>{element}</App>;
};
