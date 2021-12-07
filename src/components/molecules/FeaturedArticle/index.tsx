import React from 'react';

// Libraries
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

// Components
import {P1, P3, Button, Image, Flexbox, InAppLink} from '@components';
import {
  CardContainer,
  ImgContainer,
  Title,
  PrimaryContainer,
  ArrowContainer,
} from './styles';

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
      <Title>{title}</Title>

      <P1>
        {date} --- {timeToRead}
      </P1>

      <P3 className="article-context">{description}</P3>

      <InAppLink to={slug} className="read-button">
        <Button isBgPrimary={false}>
          Read full article{' '}
          <ArrowContainer className="arrow-container">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="first-arrow arrow"
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="second-arrow arrow"
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              className="third-arrow arrow"
            />
          </ArrowContainer>
        </Button>
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
    <PrimaryContainer>
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
    </PrimaryContainer>
  );
};

export default FeaturedArticle;
