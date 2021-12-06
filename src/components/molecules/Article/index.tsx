import React from 'react';

// Components
import {P3, H3, InAppLink, Image, Flexbox} from '@components';
import {
  OuterContainer,
  ContentContainer,
  ImgContainer,
  Overlay,
} from './styles';

export interface ArticleProps {
  title: string;
  date: string;
  timeToRead: string;
  description: string;
  slug: string;
  img: string;
  isFeatured: boolean;
}

const Article: React.FC<ArticleProps> = ({
  title,
  date,
  timeToRead,
  slug,
  img,
}) => {
  return (
    <InAppLink to={slug}>
      <OuterContainer>
        <ImgContainer>
          <Image src={img} alt={title} className="article-img" />
        </ImgContainer>

        <ContentContainer>
          <Overlay>
            <H3 className="article-title">{title}</H3>

            <Flexbox justifyBetween alignCenter style={{width: '100%'}}>
              <P3>{date}</P3>

              <P3>{timeToRead}</P3>
            </Flexbox>
          </Overlay>
        </ContentContainer>
      </OuterContainer>
    </InAppLink>
  );
};

export default Article;
