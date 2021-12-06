import React from 'react';

// Components
import {Grid} from './styles';
import {Article} from '@components';

interface ArticleStackProps {
  articles: {
    title: string;
    date: string;
    timeToRead: string;
    description: string;
    slug: string;
    img: string;
    isFeatured: boolean;
  }[];
}

const ArticleStack: React.FC<ArticleStackProps> = ({articles}) => {
  return (
    <Grid>
      {articles.map(articleDetails => (
        <Article key={articleDetails.slug} {...articleDetails} />
      ))}
    </Grid>
  );
};

export default ArticleStack;
