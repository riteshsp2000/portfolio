import React from 'react';

// Components
import {P1, P3, Button, Image, Flexbox} from '@components';
import {CardContainer, ImgContainer, Title} from './styles';
import {useMediaQuery} from '@hooks';
import {BREAKPOINTS} from '../../../theming';

const FeaturedArticle = () => {
  const isMobile = useMediaQuery(BREAKPOINTS.sm);

  const Column1 = () => (
    <Flexbox flexColumn justifyBetween alignStart className="column1">
      <div>
        <Title>Why I Love Remix</Title>

        <P1>November 13th, 2021 -- 10min read</P1>

        <P3 className="article-context">
          Lorem Ipsum dolar and something something something lorem ipsum dolar
          Lorem Ipsum dolar and something something something lorem ipsum dolar
        </P3>
      </div>

      <Button isBgPrimary={false}>Read full article</Button>
    </Flexbox>
  );

  const Column2 = () => (
    <ImgContainer>
      <Image
        // eslint-disable-next-line max-len
        src="https://res.cloudinary.com/riteshp2000/image/upload/v1638601340/portfolio/v2/Things-You-Should-Know-About-React-Hooks_slwxim.webp"
        alt="some fancy alternative"
        className="featured-article-img"
      />
    </ImgContainer>
  );

  return (
    <CardContainer
      flexColumn={isMobile}
      justifyBetween={!isMobile}
      justifyCenter={isMobile}
      alignStart
    >
      {isMobile ? (
        <>
          <Column2 />
          <Column1 />
        </>
      ) : (
        <>
          <Column1 />
          <Column2 />
        </>
      )}
    </CardContainer>
  );
};

export default FeaturedArticle;
