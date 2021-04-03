import React, {useRef, useEffect} from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {Container} from '../shared';

// Utils + Constants
import config from '../../config';
import scrollReveal from '../../utils/scrollReveal';

interface Props {
  isLoading?: boolean;
}

const About: React.FC<Props> = () => {
  const revealContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    scrollReveal?.reveal(revealContainer?.current, config.srConfig());
  }, []);

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
  color: var(--color-text);
  text-align: center;
  font-size: 70px;
  font-family: var(--font-family);
  background-color: var(--color-primary);
  border-radius: 5px;
`;
