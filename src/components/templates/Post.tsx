import React from 'react';

// Libraries
import styled from 'styled-components';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';

// Components
import {Breadcrumb, H1, Flexbox, TableOfContents, Comments} from '@components';
import {BREAKPOINTS} from '@theme';

const TopContainer = styled(Flexbox)`
  width: 100%;
  height: 404px;
  padding-bottom: 80px;

  @media ${BREAKPOINTS.sm} {
    height: 250px;
    padding-bottom: 40px;
  }
`;

const GridContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 500px);
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;

  @media ${BREAKPOINTS.md} {
    grid-template-columns: 1fr;
  }
`;

const ContentContainer = styled.div`
  grid-column: 1 / span 1;

  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-right: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Aside = styled.aside`
  grid-column: 2 / span1;
  position: -webkit-sticky;
  position: sticky;
  top: 150px;
  margin-left: 1rem;

  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

export const pageQuery = graphql`
  query ($path: String!) {
    mdx(frontmatter: {slug: {eq: $path}, isPublished: {eq: true}}) {
      body
      headings {
        value
        depth
      }
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`;

// @ts-ignore
export default ({data}) => {
  const {frontmatter, body, headings} = data.mdx;
  const {title} = frontmatter;

  return (
    <div>
      <TopContainer flexColumn justifyEnd alignStart>
        <Breadcrumb />

        <H1>{title}</H1>
      </TopContainer>

      <GridContainer>
        <ContentContainer>
          <MDXRenderer>{body}</MDXRenderer>
        </ContentContainer>

        <div>
          <Aside>
            <TableOfContents headings={headings} />
          </Aside>
        </div>

        <Comments withSeparator={false} />
      </GridContainer>
    </div>
  );
};
