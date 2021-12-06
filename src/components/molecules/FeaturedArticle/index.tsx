import React from 'react';

// Components
import {P1, P3, Button, Image, Flexbox, InAppLink} from '@components';
import {CardContainer, ImgContainer, Title} from './styles';

// Hooks
import {useMediaQuery} from '@hooks';
import {BREAKPOINTS} from '@theme';

interface FeaturedArticleProps {
  title: string;
  date: string;
  timeToRead: string;
  description: string;
  slug: string;
  img: string;
  isFeatured: boolean;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({
  title,
  date,
  timeToRead,
  description,
  slug,
  img,
}) => {
  const isMobile = useMediaQuery(BREAKPOINTS.sm);

  const Column1 = () => (
    <Flexbox flexColumn justifyBetween alignStart className="column1">
      <div>
        <Title>{title}</Title>

        <P1>
          {date} --- {timeToRead}
        </P1>

        <P3 className="article-context">{description}</P3>
      </div>

      <InAppLink to={slug}>
        <Button isBgPrimary={false}>Read full article</Button>
      </InAppLink>
    </Flexbox>
  );

  const Column2 = () => (
    <ImgContainer>
      <Image
        // eslint-disable-next-line max-len
        src={img}
        alt={title}
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
