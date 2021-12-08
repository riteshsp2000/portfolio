import React from 'react';

// Libraries
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

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

const FB = styled.div`
  border: 2px solid transparent;
  border-radius: 6px;
  transition: var(--transition);

  &:hover {
    border: 2px solid var(--color-primary);
  }
`;

export interface FeaturedProjectProps {
  img: string;
  title: string;
  excerpt: string;
  tech: string[];
  github: string;
  live: string;
  type: 'mobile' | 'web';
  flip?: boolean;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  img,
  title,
  excerpt,
  tech,
  github,
  live,
  type = 'mobile',
  flip = false,
}) => {
  const isMobile = useMediaQuery(BREAKPOINTS.sm);

  return (
    <Flexbox
      justifyCenter
      alignCenter
      style={{
        marginBottom: isMobile ? '1rem' : '3rem',
        width: '100%',
      }}
    >
      <FB>
        <GridContainer flip={flip}>
          <Section1
            flip={flip}
            type={type}
            alignCenter
            justifyCenter={isMobile}
            justifyEnd={!isMobile && !flip}
            justifyStart={!isMobile && flip}
          >
            <Image
              className="project-image"
              alt="boutiques project"
              src={img}
            />
          </Section1>

          <Section2
            isMobile={isMobile}
            flip={flip}
            flexColumn
            alignStart={!isMobile && !flip}
            alignEnd={flip}
            justifyStart
          >
            <H1>{title}</H1>
            <P1 style={{marginTop: '1rem', textAlign: flip ? 'right' : 'left'}}>
              {excerpt}
            </P1>
          </Section2>

          <Section3
            isMobile={isMobile}
            flip={flip}
            flexColumn
            justifyCenter
            alignStart={!flip}
            alignEnd={flip}
          >
            <TechContainer flip={flip}>
              {tech.map(name => (
                <Tag
                  style={{
                    marginRight: flip ? '0rem' : '2rem',
                    marginLeft: flip ? '2rem' : '0rem',
                  }}
                  key={name}
                >
                  {name}{' '}
                </Tag>
              ))}
            </TechContainer>

            <Flexbox
              alignCenter
              justifyStart={!isMobile && !flip}
              justifyEnd={!isMobile && flip}
              flexReverse={flip}
              className="buttons-container"
            >
              <Button
                isBgPrimary={false}
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    window.open(live, '_blank').focus();
                  }
                }}
                style={{
                  marginRight: flip ? '0rem' : '2rem',
                  marginLeft: flip ? '2rem' : '0rem',
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
                    transition: 'var(--transition)',
                  }}
                />
              </RedirectLink>
            </Flexbox>
          </Section3>
        </GridContainer>
      </FB>
    </Flexbox>
  );
};

export default FeaturedProject;
