import React from 'react';

// Components
import {Container, Content, ImageContainer, ContentContainer} from './styles';
import {Image, H3} from '@components';

// Assets
import {useMediaQuery} from '@hooks';
import {BREAKPOINTS} from '@theme';

export interface BannerProps {
  title?: string;
  content: string;
  flip?: boolean;
  short?: boolean;
  src: string;
  alt: string;
}

const Banner: React.FC<BannerProps> = ({
  title = false,
  content,
  flip = false,
  short = false,
  src,
  alt,
}) => {
  const isMobile = useMediaQuery(BREAKPOINTS.md);

  const Img = () => (
    <ImageContainer flip={flip}>
      <Image src={src} alt={alt} className="image" />
    </ImageContainer>
  );

  const Cnt = () => (
    <ContentContainer short={short}>
      {title && (
        <H3
          style={{marginBottom: '0.5rem', textAlign: flip ? 'right' : 'left'}}
        >
          {title}
        </H3>
      )}
      <Content short={short} flip={flip}>
        {content}
      </Content>
    </ContentContainer>
  );

  return (
    <Container flexColumn={isMobile} justifyBetween>
      {flip || isMobile ? (
        <>
          <Img />
          <Cnt />
        </>
      ) : (
        <>
          <Cnt />
          <Img />
        </>
      )}
    </Container>
  );
};

export default Banner;
