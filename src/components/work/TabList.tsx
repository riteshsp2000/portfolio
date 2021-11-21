import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {P1} from '@components';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  list-style: none;
  width: max-content;

  @media (min-width: 700px) {
    max-width: var(--nav-tab-max-width);
  }

  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    width: calc(100%);
    overflow-x: auto;
    height: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavItem = styled(P1)<{isActive: boolean}>`
  width: var(--nav-tab-max-width);

  text-align: left;
  vertical-align: middle;
  line-height: var(--nav-tab-height);

  color: ${({isActive}) =>
    isActive ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'};
  background: ${({isActive}) =>
    isActive
      ? 'var(--color-background-secondary)'
      : 'var(--color-background-primary)'};
  padding-left: 2rem;
  padding-right: 2rem;

  &:hover {
    cursor: pointer;
    background: var(--color-background-secondary);
  }

  @media (min-width: 700px) {
    border-left: 2px solid var(--color-background-secondary);
  }

  @media (max-width: 700px) {
    border-bottom: 2px solid var(--color-background-secondary);
    min-width: 200px;
    text-align: center;
    line-height: 3rem;
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

  @media (max-width: 700px) {
    height: 3px;
    width: var(--nav-tab-max-width);
    transform: translateX(
      calc(${({activeTabId}) => activeTabId} * var(--nav-tab-max-width))
    );
    bottom: 0;
    left: 0;
  }
`;

interface VerticalNavbarProps {
  jobs: any[];
  activeTabId: number;
  onClick: (id: number) => void;
}

const VerticalNavbar: React.FC<VerticalNavbarProps> = ({
  jobs,
  activeTabId,
  onClick,
}) => (
  <NavContainer>
    {jobs.map(
      (
        {
          node: {
            frontmatter: {company},
            id,
          },
        },
        index,
      ) => (
        <NavItem
          key={id}
          onClick={() => onClick(index)}
          isActive={index === activeTabId}
        >
          {company}
        </NavItem>
      ),
    )}

    <Highlight activeTabId={activeTabId} />
  </NavContainer>
);

export default VerticalNavbar;
