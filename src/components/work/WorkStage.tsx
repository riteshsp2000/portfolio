import React from 'react';

// Libraries
import styled from 'styled-components';
import {MDXRenderer} from 'gatsby-plugin-mdx';

// Components
import {H3, P3, RedirectLink} from '@components';
import {JobDetailsQuery} from '../../../gatsby-graphql';

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

const WorkStage: React.FC<{job: JobDetailsQuery | null; activeTabId: number}> =
  ({job}) => {
    // @ts-ignore
    const {frontmatter, body} = job?.node;
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

        <div style={{paddingLeft: '1rem'}}>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Stage>
    );
  };

export default WorkStage;
