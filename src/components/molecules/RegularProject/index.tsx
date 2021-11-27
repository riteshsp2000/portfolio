import React from 'react';

// Libraries
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFolder, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

// Components
import {H3, P3, RedirectLink} from '@components';
import {Container, FirstRow, TechContainer} from './styles';

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: var(--color-text-primary);
`;

export interface RegularProjectProps {
  title: string;
  excerpt: string;
  tech: string[];
  github: string;
  live: string;
}

const RegularProject: React.FC<RegularProjectProps> = ({
  title,
  excerpt,
  tech,
  github,
  live,
}) => {
  return (
    <Container>
      <FirstRow style={{marginBottom: '1rem'}}>
        <Icon icon={faFolder} />

        <div>
          <RedirectLink href={live}>
            <Icon icon={faExternalLinkAlt} />
          </RedirectLink>

          <RedirectLink href={github} style={{marginLeft: '1rem'}}>
            <Icon icon={faGithub} />
          </RedirectLink>
        </div>
      </FirstRow>

      <H3>{title}</H3>
      <P3>{excerpt}</P3>

      <TechContainer style={{marginTop: '1rem'}}>
        {tech.map(item => (
          <P3
            key={item}
            style={{color: 'var(--color-tertiary)', marginRight: '1.5rem'}}
          >
            {item}
          </P3>
        ))}
      </TechContainer>
    </Container>
  );
};

export default RegularProject;
