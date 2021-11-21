import React, {useState, useEffect, useRef, KeyboardEvent} from 'react';

// Libraries
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby';

// Components
import JobsTabList from './TabList';
import JobDescription from './WorkStage';

// Types + Utils
import {keyCodes as KEY_CODES} from '@utils';

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 5rem;

  @media (max-width: 700px) {
    display: block;
  }

  @media (min-width: 700px) {
    min-height: 340px;
  }
`;

export default () => {
  /**
   * Fetch data via useStaticQuery during build time
   * from /content/jobs directory. A list of .mdx files
   * contains frontmatter details and a description of
   * the job in the form of body.
   */
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

  /**
   * States and references to manage the active tab and
   * tab switches.
   * - activeTabId keeps a track of the current active tab
   * - tabFocus keeps a track of current focused tab.
   * - tabs keeps a reference to the job tabs.
   */
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>(
    Array.from({length: jobs.length}),
  );

  /**
   * Function to handle tab change when clicked on a tab
   */
  const onClick = (id: number) => {
    setActiveTabId(id);
    setTabFocus(id);
  };

  // Focus on tabs when using up & down arrow keys
  /**
   * Handles specific key inputs when on the work experience section.
   * Mainly looks for Up and Down arrow strikes
   */
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
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

  /**
   * Handler to focus the selected tab.
   * Uses the tabs array to get the focussed element and then
   * uses the .focus() method on the element
   * The element here is a button
   */
  const focusTab = () => {
    if (tabs.current) {
      console.log(tabs.current);
      if (tabs.current[tabFocus]) {
        console.log('Focussing');
        // @ts-ignore
        tabs.current[tabFocus].focus();
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

  return (
    <MainContainer>
      <JobsTabList
        activeTabId={activeTabId}
        jobs={jobs}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabs={tabs}
      />

      <JobDescription job={jobs[activeTabId]} activeTabId={activeTabId} />
    </MainContainer>
  );
};
