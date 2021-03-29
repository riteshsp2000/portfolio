import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {ThemeToggle} from '../components';

// Constants
import {BREAKPOINTS} from '../theming';

export default function Home(): JSX.Element {
  return (
    <>
      <StartDiv>
        <Heading>Hello is this working</Heading>
        <ThemeToggle />
      </StartDiv>
      <ThemeToggle />
    </>
  );
}

const StartDiv = styled.div`
  width: 100%;
  height: 400px;
  margin: 0px;
  background: linear-gradient(
    0deg,
    var(--color-gradient-background-one),
    var(--color-gradient-background-two)
  );
  transition: var(--color-gradient-background-one) 350ms linear 0s,
    var(--color-gradient-background-two) 350ms linear 0s;

  @media ${BREAKPOINTS.md} {
    height: 200px;
  }
`;

const Heading = styled.h3`
  font-size: 22px;
  color: var(--color-primary-heading);
  line-height: 1.6;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
`;
