import React, {useState, useEffect, useRef, KeyboardEvent} from 'react';

// Libraries
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';

// Components
import VerticalNavbar from './TabList';
import WorkStage from './WorkStage';

// Types + Utils
import {JobDetailsQuery} from '../../../gatsby-graphql';
import {keyCodes as KEY_CODES} from '@utils';

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
  const [tabFocus, setTabFocus] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>(
    Array.from({length: jobs.length}),
  );
  const [activeTabData, setActiveTabData] = useState<JobDetailsQuery | null>(
    jobs[0],
  );

  const onClick = (id: number) => {
    setActiveTabId(id);
    setActiveTabData(jobs[id]);
    setTabFocus(id);
  };

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    switch (event.key) {
      case KEY_CODES.ARROW_UP: {
        event.preventDefault();
        setTabFocus(current => current - 1);
        break;
      }

      case KEY_CODES.ARROW_DOWN: {
        event.preventDefault();
        setTabFocus(current => current + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  // Function to handle focus states
  const focusTab = () => {
    if (tabs.current) {
      console.log(tabs.current);
      if (tabs.current[tabFocus]) {
        console.log('Focussing');
        tabs.current[tabFocus]?.focus();
        return;
      }

      // If we're at the end, go to the start
      if (tabFocus >= tabs.current.length) setTabFocus(0);

      // If we're at the start, move to the end
      if (tabFocus < 0) setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => {
    focusTab();
  }, [tabFocus]);

  useEffect(() => {
    setActiveTabData(jobs[0]);
  }, []);

  return (
    <MainContainer role="tablist" aria-label="Job tabs" onKeyDown={onKeyDown}>
      <VerticalNavbar
        activeTabId={activeTabId}
        jobs={jobs}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabs={tabs}
      />

      <WorkStage
        job={activeTabData ? activeTabData : jobs[0]}
        activeTabId={activeTabId}
      />
    </MainContainer>
  );
};
