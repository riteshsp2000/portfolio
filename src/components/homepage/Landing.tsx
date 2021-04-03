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
    </Container>
  );
}

export default Landing;

const Container = styled.div`
  width: 100%;
  height: 350px;

  @media (max-width: 1100px) and (min-width: 800px) {
    padding-right: 60px;
    padding-left: 60px;
  }

  @media ${BREAKPOINTS.md} {
    margin-top: 50px;
  }
`;

const Intro = styled.span`
  color: var(--color-secondary);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family);
  font-size: 16px;
  line-height: 1.4;
`;
const Name = styled.h1`
  color: var(--color-primary-heading);
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
