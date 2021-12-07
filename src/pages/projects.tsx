import React from 'react';

// Libraries
import styled from 'styled-components';
import {graphql} from 'gatsby';

// Components
import {FeaturedProject, RegularProject} from '@components';

export const pageQuery = graphql`
  {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/content/projects/featured/"}}
      sort: {fields: frontmatter___date, order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            github
            img
            live
            tech
            type
          }
        }
      }
    }
  }
`;

const Projects: React.FC = ({
  // @ts-ignore
  data: {
    allMdx: {edges},
  },
}) => {
  return (
    <>
      {/* @ts-ignore */}
      {edges.map(({node: {frontmatter}}, index) => (
        <FeaturedProject
          key={frontmatter.title}
          {...frontmatter}
          flip={index % 2 !== 0}
        />
      ))}
    </>
  );
};

export default Projects;
