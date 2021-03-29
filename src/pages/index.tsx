import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {Header, Vector} from '../components';

// Constants
import {BREAKPOINTS} from '../theming';

export default function Home(): JSX.Element {
  return (
    <StartDiv>
      <Header />
      <StyledVector viewBox="0 0 719 66" fill="none">
        <path d="M205.5 2C132.7 -1.6 38.1667 18.8333 0 29.5V71.5H719V2C708.5 2 670.5 -2.5 624.5 9C563.005 24.3738 503 47.5 392.5 34C282 20.5 296.5 6.5 205.5 2Z" />
      </StyledVector>
    </StartDiv>
  );
}

const StartDiv = styled.div`
  width: 100%;
  height: 400px;
  margin: 0px;
  padding: 50px 0px;
  position: relative;
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

const StyledVector = styled(Vector)`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 0;
  fill: var(--color-background);
  transition: fill 350ms ease 0s;
`;
