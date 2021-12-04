import React from 'react';

// Components
import {Grid} from './styles';
import {Article} from '@components';

const ArticleStack = () => {
  return (
    <Grid>
      {[1, 2, 3].map(number => (
        <Article key={number} />
      ))}
    </Grid>
  );
};

export default ArticleStack;
