import React, {useState, useEffect} from 'react';

// Libraries
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';

// Components
import VerticalNavbar from './TabList';
import WorkStage from './WorkStage';

// Types
import {JobDetailsQuery} from '../../../gatsby-graphql';

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 5rem;

  @media (max-width: 600px) {
    display: block;
  }

  @media (min-width: 700px) {
    min-height: 340px;
  }
`;

export default () => {
  const {
    jobs: {edges: jobs},
  } = useStaticQuery(graphql`
    query JobDetails {
      jobs: allMdx(
        sort: {fields: frontmatter___date, order: DESC}
        filter: {fileAbsolutePath: {regex: "/content/jobs/"}}
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              company
              location
              range
              url
            }
            id
            body
          }
        }
      }
    }
  `);

  const [activeTabId, setActiveTabId] = useState(0);
  const [activeTabData, setActiveTabData] = useState<JobDetailsQuery | null>(
    jobs[0],
  );

  const onClick = (id: number) => {
    setActiveTabId(id);
    setActiveTabData(jobs[id]);
  };

  useEffect(() => {
    setActiveTabData(jobs[0]);
  }, []);

  return (
    <MainContainer>
      <VerticalNavbar activeTabId={activeTabId} jobs={jobs} onClick={onClick} />

      <WorkStage job={activeTabData ? activeTabData : jobs[0]} />
    </MainContainer>
  );
};
