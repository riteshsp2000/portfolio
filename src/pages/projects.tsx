import React from 'react';

// Libraries
import {graphql} from 'gatsby';

// Components
import {FeaturedProject, SectionTitle, ProjectGrid} from '@components';

export const pageQuery = graphql`
  query fetchProjects {
    notable: allMdx(
      filter: {fileAbsolutePath: {regex: "/content/projects/notable/"}}
      sort: {fields: frontmatter___date, order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            github
            live
            tech
          }
        }
      }
    }

    featured: allMdx(
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
    featured: {edges: featured},
    notable: {edges: notable},
  },
}) => {
  return (
    <>
      <div style={{margin: '3rem auto 3rem auto'}}>
        <SectionTitle highlight="Notables" title="Other" />
      </div>

      {/* @ts-ignore */}
      {featured.map(({node: {frontmatter}}, index) => (
        <FeaturedProject
          key={frontmatter.title}
          {...frontmatter}
          flip={index % 2 !== 0}
        />
      ))}

      <div style={{margin: '5rem auto 3rem auto'}}>
        <SectionTitle highlight="Notables" title="Other" />
      </div>

      <ProjectGrid
        // @ts-ignore
        projects={notable.map(({node: {frontmatter}}) => frontmatter)}
      />
      {}
    </>
  );
};

export default Projects;
