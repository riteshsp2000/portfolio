import React from 'react';

// Libraries
import styled from 'styled-components';

interface Props {
  ref?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
  id?: string;
}

const About: React.FC<Props> = ({children, ref, id}) => (
  <Container id={id} ref={ref}>
    {children}
  </Container>
);

export default About;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;
