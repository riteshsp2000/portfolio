import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {Card, Image, H1, P1, P2} from '@components';

const AlignerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Card)`
  width: 80%;
  max-width: var(--max-width);

  padding: 2rem 4rem;
  margin: 0;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1.5fr 1fr;
  grid-gap: 1rem;
`;

const Section1 = styled.div<{type: 'mobile' | 'web'}>`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 100%;
  height: 100%;

  background: red;

  .project-image {
    aspect-ratio: 0.525;
    object-fit: contain;
    height: 500px;
    width: auto;
  }
`;

const Section2 = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background: green;
`;

const Section3 = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  width: 100%;
  height: 100%;

  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background: blue;
`;

const TechContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export interface FeaturedProjectProps {
  img: string;
  title: string;
  excerpt: string;
  tech: string[];
  github: string;
  live: string;
  type: 'mobile' | 'web';
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  img,
  title,
  excerpt,
  tech,
  github,
  live,
  type,
}) => {
  return (
    <AlignerContainer>
      <Container>
        <Section1 type={'mobile'}>
          <Image
            style={{
              aspectRatio: '0.525',
              objectFit: 'contain',
              // width: type === 'mobile' ? '50%' : '90%',
              height: '500px',
              width: 'auto',
            }}
            className="project-image"
            alt="boutiques project"
            src={img}
          />
        </Section1>

        <Section2>
          <H1>{title}</H1>
          <P1>{excerpt}</P1>
        </Section2>

        <Section3>
          <TechContainer>
            {tech.map(name => (
              <P2 style={{marginRight: '1rem'}} key={name}>
                {name}{' '}
              </P2>
            ))}
          </TechContainer>
          <P1 style={{marginTop: '1rem'}}>View Website</P1>
        </Section3>
      </Container>
    </AlignerContainer>
  );
};

export default FeaturedProject;
