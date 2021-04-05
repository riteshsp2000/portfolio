import React from 'react';

// Libraries
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

// Components
import {PrimaryHeading, TertiaryHeading, Para} from '../shared';

// Constants
import {BREAKPOINTS, useTheme} from '../../theming';

const image =
  'https://res.cloudinary.com/riteshsp2000/image/upload/Screenshot_2021-04-05_at_1.06.41_PM_uw0g8b.png';

interface Props {
  heading: string;
  excerpt: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
}

const Project: React.FC<Props> = ({heading, excerpt, tech, links}) => {
  const [colorMode] = useTheme();

  return (
    <Li>
      <FirstColumn>
        <div>
          <TertiaryHeading>Project</TertiaryHeading>
          <PrimaryHeading>{heading}</PrimaryHeading>
        </div>

        <Excerpt>
          <Para>{excerpt}</Para>
        </Excerpt>

        <TechContainer>
          {tech.map(number => (
            <Tag key={number}>React</Tag>
          ))}
        </TechContainer>

        <IconsContainer>
          <a href={links.github} target="_blank" rel="noreferrer">
            <Icon size="lg" icon={faExternalLinkSquareAlt} />
          </a>
          <a href={links.live} target="_blank" rel="noreferrer">
            <Icon size="lg" icon={faGithub} />
          </a>
        </IconsContainer>
      </FirstColumn>

      <SecondColumn>
        <Image src={image} alt="Trial" />
        <ImageLink
          href="https://tedxnitrourkela.com"
          target="_blank"
          rel="noreferrer"
          isLight={colorMode === 'light'}
        />
      </SecondColumn>
    </Li>
  );
};

export default Project;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 100px;
  width: 100%;
  height: 350px;

  @media ${BREAKPOINTS.md} {
    position: relative;
    z-index: 1;
    display: block;
  }
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 40%;
  height: 100%;

  @media ${BREAKPOINTS.md} {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100;
    z-index: 2;

    padding: 20px 40px;
  }
`;

const Excerpt = styled.div`
  width: 140%;
  height: auto;
  min-height: 100px;

  background-color: var(--color-gradient-background-one);
  border-radius: 5px;

  position: relative;
  z-index: 10;

  padding: 20px 20px;
  margin-top: 20px;

  @media ${BREAKPOINTS.md} {
    width: 100%;
  }
`;

const TechContainer = styled.div`
  width: 80%;
  height: auto;
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Tag = styled.span`
  color: var(--color-text);
  font-size: 13px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-normal);

  margin: 5px 20px 5px 0px;
  height: auto;
`;

const IconsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  color: var(--color-secondary);
  margin: 10px 30px 10px 0px;
`;

const SecondColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  transform: translate(0px, 0px);
  transition: transform 350ms ease 0s;

  &:hover {
    transform: translate(0px, -10px);
  }

  @media ${BREAKPOINTS.md} {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100;
    z-index: 1;
  }
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const ImageLink = styled.a<{isLight: boolean}>`
  text-decoration: none;
  background-color: var(--color-secondary-alpha);
  transition: background-color 350ms ease 0s;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  &:hover {
    background-color: transparent;
  }

  color: rgba(0, 0, 0, 0.5);

  @media ${BREAKPOINTS.md} {
    background-color: ${({isLight}) =>
      isLight ? 'rgba(120, 196, 247, 0.685)' : 'rgba(0, 0, 0, 0.5)'};
  }
`;
