import React, {useState} from 'react';

// Libraries
import styled from 'styled-components';

// Components
import VerticalNavbar from './VerticalNavbar';
import WorkStage from './WorkStage';

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  display: flex;
  @media (max-width: 600px) {
    display: block;
  }

  @media (min-width: 700px) {
    min-height: 340px;
  }
`;

export default () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const jobs = [
    {
      name: 'BharatPe',
      tabId: 0,
      onClick: () => setActiveTabId(0),
    },
    {
      name: 'MLH Fellowship',
      tabId: 1,
      onClick: () => setActiveTabId(1),
    },
    {
      name: 'Boutiques Inc',
      tabId: 2,
      onClick: () => setActiveTabId(2),
    },
    {
      name: 'Humaps',
      tabId: 3,
      onClick: () => setActiveTabId(3),
    },
  ];

  return (
    <MainContainer>
      <VerticalNavbar activeTabId={activeTabId} jobs={jobs} />

      <WorkStage />
    </MainContainer>
  );
};
