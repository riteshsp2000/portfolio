import React from 'react';

// Libraries
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {GatsbyImage, IGatsbyImageData} from 'gatsby-plugin-image';

// Components
import {PrimaryHeading, TertiaryHeading, Para} from '../shared';

// Constants
import {BREAKPOINTS, useTheme} from '../../theming';

interface Props {
  heading: string;
  excerpt: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
  opposite: boolean;
  featureImage: IGatsbyImageData;
}

const Project: React.FC<Props> = ({
  heading,
  excerpt,
  tech,
  links,
  opposite,
  featureImage,
}) => {
  const [colorMode] = useTheme();

  const ColumnOne = (
    <FirstColumn opposite={opposite}>
      <TitleContainer opposite={opposite}>
        <TertiaryHeading>Featured Project</TertiaryHeading>
        <PrimaryHeading>{heading}</PrimaryHeading>
      </TitleContainer>

      <Excerpt isLight={colorMode === 'light'}>
        <Para>{excerpt}</Para>
      </Excerpt>

      <TechContainer opposite={opposite}>
        {tech.map((technology: string) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </TechContainer>

      <IconsContainer opposite={opposite}>
        <a
          href={links.live}
          aria-label={`${heading} GitHub Link`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon size="lg" icon={faExternalLinkSquareAlt} />
        </a>
        <a
          href={links.github}
          aria-label={`${heading} Live Link`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon size="lg" icon={faGithub} />
        </a>
      </IconsContainer>
    </FirstColumn>
  );

  const ColumnTwo = (
    <SecondColumn>
      <GatsbyImage
        style={{borderRadius: '5px', overflow: 'hidden', height: '100%'}}
        objectFit="cover"
        image={featureImage}
        alt={heading}
      />
      <ImageLink
        href={links.live}
        target="_blank"
        rel="noreferrer"
        isLight={colorMode === 'light'}
        aria-label={`${heading} Live Link`}
      />
    </SecondColumn>
  );

  return (
    <Li>
      {opposite ? (
        <>
          {ColumnTwo}
          {ColumnOne}
        </>
      ) : (
        <>
          {ColumnOne}
          {ColumnTwo}
        </>
      )}
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
  overflow: hidden;

  @media ${BREAKPOINTS.md} {
    position: relative;
    z-index: 1;
    display: block;
  }

  @media ${BREAKPOINTS.sm} {
    height: 500px;
  }
`;

const FirstColumn = styled.div<{opposite: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({opposite}) => (opposite ? 'flex-end' : 'flex-start')};

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

  @media ${BREAKPOINTS.sm} {
    align-items: flex-start;
    padding: 20px 20px;
  }
`;

const TitleContainer = styled.div<{opposite: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: ${({opposite}) => (opposite ? 'flex-end' : 'flex-start')};

  @media ${BREAKPOINTS.sm} {
    align-items: flex-start;
  }
`;

const Excerpt = styled.div<{isLight: boolean}>`
  width: 140%;
  height: auto;
  min-height: 100px;

  background-color: ${({isLight}) => (isLight ? '#d3e9f7' : '#1d2b33')};
  border-radius: 5px;

  position: relative;
  z-index: 10;

  padding: 20px 20px;
  margin-top: 20px;

  @media ${BREAKPOINTS.md} {
    width: 100%;
  }
`;

const TechContainer = styled.div<{opposite: boolean}>`
  width: 80%;
  height: auto;
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: ${({opposite}) => (opposite ? 'flex-end' : 'flex-start')};

  @media ${BREAKPOINTS.sm} {
    justify-content: flex-start;
  }
`;

const Tag = styled.span`
  color: var(--color-text);
  font-size: 13px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-normal);

  margin: 5px 20px 5px 0px;
  height: auto;
`;

const IconsContainer = styled.div<{opposite: boolean}>`
  width: 100%;
  display: flex;
  justify-content: ${({opposite}) => (opposite ? 'flex-end' : 'flex-start')};
  align-items: center;

  @media ${BREAKPOINTS.sm} {
    justify-content: flex-start;
  }
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

// const Image = styled.img`
//   width: auto;
//   height: 100%;
//   aspect-ratio: attr(width) / attr(height);
// `;

const ImageLink = styled.a<{isLight: boolean}>`
  text-decoration: none;
  background-color: ${({isLight}) =>
    isLight ? 'rgba(172, 220, 252, 0.685)' : 'rgba(0, 0, 0, 0.2)'};
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
      isLight ? 'rgba(120, 196, 247, 0.685)' : 'rgba(0, 0, 0, 0.8)'};
  }
`;
