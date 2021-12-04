/* eslint-disable max-len */
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
  img?: {
    src: string;
    alt: string;
  };
  title?: string;
  date?: string;
  time?: string;
}

const Article: React.FC<ArticleProps> = ({
  title = 'Make your life easier with Custom Hooks',
  date = '12th Nov 2021',
  time = '4 min',
}) => {
  const src =
    'https://res.cloudinary.com/riteshp2000/image/upload/v1638601340/portfolio/v2/Things-You-Should-Know-About-React-Hooks_slwxim.webp';
  const alt = 'React Hooks';

  return (
    <InAppLink to="/link">
      <OuterContainer>
        <ImgContainer>
          <Image src={src} alt={alt} className="article-img" />
        </ImgContainer>

        <ContentContainer>
          <Overlay>
            <H3 className="article-title">{title}</H3>

            <Flexbox justifyBetween alignCenter style={{width: '100%'}}>
              <P3>{date}</P3>

              <P3>{time}</P3>
            </Flexbox>
          </Overlay>
        </ContentContainer>
      </OuterContainer>
    </InAppLink>
  );
};

export default Article;
