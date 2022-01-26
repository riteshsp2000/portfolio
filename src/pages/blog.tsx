import React from 'react';

// Libraries
// import styled from 'styled-components';
import {graphql} from 'gatsby';

// Components
import {ArticleStack, FeaturedArticle} from '@components';

export const pageQuery = graphql`
  {
    allMdx(
      filter: {
        fileAbsolutePath: {regex: "/content/blogs/"}
        frontmatter: {isPublished: {eq: true}}
      }
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            timeToRead
            slug
            title
            date
            description
            img
            isFeatured
          }
        }
      }
    }
  }
`;

// @ts-ignore
const Blogs = ({data}) => {
  const {
    allMdx: {edges},
  } = data;

  // eslint-disable-next-line prefer-destructuring
  const featuredArticle = edges.filter(
    ({
      node: {
        // @ts-ignore
        frontmatter: {isFeatured},
      },
    }) => isFeatured,
  );

  const regularArticles = edges.filter(
    ({
      node: {
        // @ts-ignore
        frontmatter: {isFeatured},
      },
    }) => !isFeatured,
  );

  return (
    <div>
      {featuredArticle.length > 0 && (
        <div style={{marginTop: '2rem', marginBottom: '2rem'}}>
          <FeaturedArticle {...featuredArticle[0].node.frontmatter} />
        </div>
      )}

      <div style={{marginTop: '2rem', marginBottom: '2rem'}}>
        <ArticleStack
          // @ts-ignore
          articles={regularArticles.map(({node: {frontmatter}}) => frontmatter)}
        />
      </div>
    </div>
  );
};

export default Blogs;
