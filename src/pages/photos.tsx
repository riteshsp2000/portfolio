import React from 'react';

// Libraries
import styled from 'styled-components';

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

const Error: React.FC = () => (
  <Container>
    <img
      className="image"
      alt="Error Page not found"
      src="https://res.cloudinary.com/riteshp2000/image/upload/v1638967223/portfolio/v2/assets/animation_500_kwxiqink_va3ghc.gif"
    />
    <h1>Coming Soon. Stay tuned!</h1>
  </Container>
);

export default Error;
