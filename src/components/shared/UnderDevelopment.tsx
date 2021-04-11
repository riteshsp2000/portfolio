import React from 'react';

// Libraries
import styled from 'styled-components';

const UnderDevelopment: React.FC = () => (
  <Container>
    <Text>Comming Soon!</Text>
  </Container>
);

export default UnderDevelopment;

const Container = styled.section`
  width: 100%;
  height: calc(100vh - 400px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 45px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  line-height: 1.5;
  color: var(--color-secondary);
  text-align: center;
`;
