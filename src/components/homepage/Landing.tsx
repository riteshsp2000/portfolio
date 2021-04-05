import React from 'react';

// Libraries
import styled from 'styled-components';

// Constants
import {BREAKPOINTS} from '../../theming';
import config from '../../config';

function Landing(): JSX.Element {
  return (
    <Container>
      <Intro>Hi! my name is</Intro>
      <section>
        <Name>{config.name}</Name>
        <Description>{config.description}</Description>
        <SubDescription>{config.subDescription}</SubDescription>
      </section>
      <Gif
        src="https://res.cloudinary.com/riteshsp2000/image/upload/portfolio/animation_500_kn4oe8qs_no12vz.gif"
        alt="Scroll Down"
      />
    </Container>
  );
}

export default Landing;

const Container = styled.section`
  width: 100%;
  height: calc(100vh - 400px);
  padding-top: 50px;
  position: relative;

  @media (max-width: 1100px) and (min-width: 800px) {
    padding-right: 60px;
    padding-left: 60px;
  }

  @media ${BREAKPOINTS.md} {
    height: calc(100vh - 200px);
    padding-top: 100px;
  }
`;

const Intro = styled.span`
  color: var(--color-secondary);
  transition: color 350ms ease 0s;
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family);
  font-size: 16px;
  line-height: 1.4;
`;

const Name = styled.h1`
  color: var(--color-primary-heading);
  transition: color 350ms ease 0s;
  transition: color 350ms ease 0s;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  font-size: 50px;
  line-height: 1.4;

  @media ${BREAKPOINTS.md} {
    font-size: 35px;
  }
`;

const Description = styled.h2`
  color: var(--color-secondary-heading);
  transition: color 350ms ease 0s;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  font-size: 50px;
  line-height: 1.4;

  @media ${BREAKPOINTS.md} {
    font-size: 35px;
  }
`;

const SubDescription = styled.p`
  color: var(--color-secondary-heading);
  transition: color 350ms ease 0s;
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family);
  font-size: 16px;
  line-height: 1.6;
  max-width: 51%;

  @media ${BREAKPOINTS.md} {
    max-width: 90%;
    width: 90%;
  }
`;

const Gif = styled.img`
  width: 50px;
  height: auto;

  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 10px;
  left: 50%;

  @media ${BREAKPOINTS.md} {
    bottom: 40px;
  }
`;
