import React, {useRef} from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {Container} from '../shared';

const About: React.FC = () => {
  const containerRef = useRef(null) as React.Ref<HTMLDivElement>;

  return (
    <Container ref={containerRef} id="about">
      <h1>About Page</h1>
    </Container>
  );
};

export default About;
