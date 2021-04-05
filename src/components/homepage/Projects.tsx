import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import Project from './Project';

// Constants
import {BREAKPOINTS} from '../../theming';

const Projects: React.FC = () => (
  <Container id="projects">
    <Ul>
      {[1, 2, 3].map(number => (
        <Project
          key={number}
          heading="Primary Heading"
          excerpt="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab ipsam tempora quas placeat esse accusantium? Distinctio vero eaque eos provident"
          tech={['1', '2', '3', '4', '6']}
          links={{github: '', live: ''}}
        />
      ))}
    </Ul>
  </Container>
);

export default Projects;

const Container = styled.section`
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1100px;
  min-height: 100vh;

  @media ${BREAKPOINTS.md} {
    padding: 80px 0px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;
