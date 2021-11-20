import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {P1} from '@components';

const NavContainer = styled.div`
  /* width: var(--nav-max-width); */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;

const NavItem = styled(P1)<{isActive: boolean}>`
  width: 100%;
  max-width: var(--nav-tab-max-width);

  text-align: left;
  vertical-align: middle;
  line-height: var(--nav-tab-height);
  color: ${({isActive}) =>
    isActive ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'};
  font-weight: ${({isActive}) =>
    isActive ? 'var(--font-weight-bold)' : 'var(--font-weight-normal)'};
  background: ${({isActive}) =>
    isActive
      ? 'var(--color-background-secondary)'
      : 'var(--color-background-primary)'};
  border-left: 2px solid var(--color-background-secondary);
  padding-left: 2rem;
  padding-right: 2rem;

  &:hover {
    cursor: pointer;
    background: var(--color-background-secondary);
  }
`;

const Highlight = styled.div<{activeTabId: number}>`
  width: 3px;
  height: var(--nav-tab-height);
  border-radius: 3px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  background: var(--color-text-primary);
  transform: translateY(
    calc(${({activeTabId}) => activeTabId} * var(--nav-tab-height))
  );
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;
`;

interface VerticalNavbarProps {
  jobs: {
    name: string;
    tabId: number;
    onClick: () => void;
  }[];
  activeTabId: number;
}

const VerticalNavbar: React.FC<VerticalNavbarProps> = ({jobs, activeTabId}) => (
  <NavContainer>
    {jobs.map(({name, tabId, onClick}) => (
      <NavItem
        key={`${tabId}-${name}`}
        onClick={onClick}
        isActive={tabId === activeTabId}
      >
        {name}
      </NavItem>
    ))}

    <Highlight activeTabId={activeTabId} />
  </NavContainer>
);

export default VerticalNavbar;
