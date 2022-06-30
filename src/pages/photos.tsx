import React from 'react';

// Libraries
import styled from 'styled-components';

import Lottie from 'react-lottie';

import * as animationData from '../images/comingsoon.json';

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5rem;

  .image {
    width: 30%;
    height: auto;
    aspect-ratio: 1.2/1;
  }
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Error: React.FC = () => (
  <Container>
    <Lottie options={defaultOptions} height={400} width={400} />
    <h1>Coming Soon. Stay tuned!</h1>
  </Container>
);

export default Error;
