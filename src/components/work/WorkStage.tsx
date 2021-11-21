import React from 'react';

// Libraries
import styled from 'styled-components';
import {MDXProvider} from '@mdx-js/react';
import {MDXRenderer} from 'gatsby-plugin-mdx';

// Components
import {H3, P3, RedirectLink} from '@components';

const Stage = styled.div`
  width: var(--nav-stage-width);
  height: auto;
  min-height: 350px;
  padding-left: 3.5rem;

  @media (max-width: 700px) {
    max-width: 100%;
    padding-left: 0;
    padding-top: 2rem;
  }
`;

const Ul = styled.ul`
  list-style: circle;
  list-style-type: circle;
  margin-top: 1rem;
  padding-left: 1rem;
`;

const Li: React.FC = ({children}) => (
  <li>
    <P3>{children}</P3>
  </li>
);

const WorkStage: React.FC<{job: any}> = ({job}) => {
  const {frontmatter, body} = job.node;
  const {title, url, company, range} = frontmatter;

  return (
    <Stage>
      <H3>
        {title}&nbsp;
        <RedirectLink href={url} style={{fontSize: 'inherit'}}>
          @{company}
        </RedirectLink>
      </H3>
      <P3 style={{fontSize: '14px', marginBottom: '1rem'}}>{range}</P3>

      <MDXProvider
        components={{
          ul: Ul,
          li: Li,
        }}
      >
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Stage>
  );
};

export default WorkStage;
