import React from 'react';

// Libraries
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';

// Components
import Project from './Project';

// Constants
import {BREAKPOINTS} from '../../theming';

const Projects: React.FC = () => {
  const {
    projects: {edges: projects},
  } = useStaticQuery(graphql`
    query MyQuery {
      projects: allMdx(
        sort: {fields: frontmatter___date, order: DESC}
        filter: {fileAbsolutePath: {regex: "/content/projects/"}}
      ) {
        edges {
          node {
            frontmatter {
              date
              excerpt
              title
              tech
              github
              live
            }
          }
        }
      }
    }
  `);

  return (
    <Container id="projects">
      <Ul>
        {projects.map(({node: {// @ts-ignore
            frontmatter: {date, excerpt, title, tech, github, live}}}) => (
          <Project
            key={date}
            heading={title}
            excerpt={excerpt}
            tech={tech}
            links={{github, live}}
          />
        ))}
      </Ul>
    </Container>
  );
};

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
