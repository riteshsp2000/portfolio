import React from 'react';

// Libraries
import styled from 'styled-components';

// Constants
import {BREAKPOINTS} from '../theming';

export default function Home(): JSX.Element {
  return (
    <StartDiv>
      <Heading>Hello is this working</Heading>
    </StartDiv>
  );
}

const StartDiv = styled.div`
  width: 100%;
  height: 400px;
  margin: 0px;
  background: linear-gradient(
    359deg,
    var(--color-gradient-background-one),
    var(--color-gradient-background-two)
  );

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
