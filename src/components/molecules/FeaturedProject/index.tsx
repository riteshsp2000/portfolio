import React from 'react';

// Libraries
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

// Components
import {
  H1,
  P1,
  GridContainer,
  Section1,
  Section2,
  Section3,
  TechContainer,
  Tag,
} from './styles';
import {Image, Flexbox, Button, RedirectLink} from '@components';

// Hooks
import {useMediaQuery} from '@hooks';

// Utils + Assets
import {BREAKPOINTS} from '@theme';

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
  const isMobile = useMediaQuery(BREAKPOINTS.sm);

  return (
    <Flexbox justifyCenter alignCenter>
      <GridContainer>
        <Section1 alignCenter justifyCenter={isMobile} justifyEnd={!isMobile}>
          <Image className="project-image" alt="boutiques project" src={img} />
        </Section1>

        <Section2 flexColumn alignStart justifyStart>
          <H1>{title}</H1>
          <P1 style={{marginTop: '1rem'}}>{excerpt}</P1>
        </Section2>

        <Section3 flexColumn alignStart justifyStart>
          <TechContainer>
            {tech.map(name => (
              <Tag style={{marginRight: '2rem'}} key={name}>
                {name}{' '}
              </Tag>
            ))}
          </TechContainer>

          <Flexbox
            alignCenter
            justifyStart
            style={{
              marginTop: '3rem',
            }}
          >
            <Button
              isBgPrimary={false}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  // @ts-ignore
                  window.open(live, '_blank').focus();
                }
              }}
              style={{
                marginRight: '2rem',
              }}
            >
              View Website
            </Button>

            <RedirectLink href={github}>
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  fontSize: '2.3rem',
                  color: 'var(--color-text-primary)',
                }}
              />
            </RedirectLink>
          </Flexbox>
        </Section3>
      </GridContainer>
    </Flexbox>
  );
};

export default FeaturedProject;
