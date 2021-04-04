import React, {useRef} from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {Container} from '../shared';

interface Props {
  isLoading?: boolean;
}

const About: React.FC<Props> = () => {
  const revealContainer = useRef<HTMLDivElement>(null);

  return (
    <Container id="about">
      <Styledh1 ref={revealContainer}>About Page</Styledh1>
    </Container>
  );
};

export default About;

const Styledh1 = styled.h1`
  width: 70%;
  line-height: 3;
  color: var(--color-tertiary);
  text-align: center;
  font-size: 70px;
  font-family: var(--font-family);
  background-color: var(--color-secondary);
  border-radius: 5px;
`;
