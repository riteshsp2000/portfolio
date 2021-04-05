import React from 'react';

// Libraries
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExternalLinkSquareAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

// Components
import {PrimaryHeading, TertiaryHeading, Para} from '../shared';

// Constants
import {BREAKPOINTS} from '../../theming';

const image =
  'https://res.cloudinary.com/riteshsp2000/image/upload/Screenshot_2021-04-05_at_1.06.41_PM_uw0g8b.png';

interface Props {
  heading?: string;
  excerpt?: string;
  tech?: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

const Project: React.FC<Props> = ({heading, excerpt, tech, links}) => (
  <Container id="projects">
    <Ul>
      <Li>
        <FirstColumn>
          <div>
            <TertiaryHeading>Some Title</TertiaryHeading>
            <PrimaryHeading>Primary Heading</PrimaryHeading>
          </div>

          <Excerpt>
            <Para>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab
              ipsam tempora quas placeat esse accusantium? Distinctio vero eaque
              eos provident
            </Para>
          </Excerpt>

          <TechContainer>
            {[1, 2, 3, 4, 5].map(number => (
              <Tag key={number}>React</Tag>
            ))}
          </TechContainer>

          <IconsContainer>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Icon size="lg" icon={faExternalLinkSquareAlt} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
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
          />
        </SecondColumn>
      </Li>
    </Ul>
  </Container>
);

export default Project;

const Container = styled.section`
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1100px;
  min-height: 100vh;

  @media ${BREAKPOINTS.md} {
    padding: 80px 0px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 100px;
  width: 100%;
  height: 350px;
`;

const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 40%;
  height: 100%;
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
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const ImageLink = styled.a`
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
`;
