import React from 'react';

// Components
import {
  H1,
  P1,
  AlignerContainer,
  Container,
  Section1,
  Section2,
  Section3,
  TechContainer,
} from './styles';
import {Image, P2} from '@components';

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
