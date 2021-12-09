import React, {KeyboardEvent, MutableRefObject} from 'react';

// Libraries
import styled from 'styled-components';

// Types
import {JobsQuery} from './index';

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
    height: var(--nav-tab-height);

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const NavItem = styled.button<{isActive: boolean}>`
  width: var(--nav-tab-max-width);

  font-weight: var(--font-weight-regular);
  font-family: var(--font-family);
  font-style: normal;
  font-size: 1.125rem;
  transition: var(--transition);

  display: flex;
  align-items: center;
  justify-content: left;
  height: var(--nav-tab-height);

  color: ${({isActive}) =>
    isActive ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'};
  background: ${({isActive}) =>
    isActive
      ? 'var(--color-background-secondary)'
      : 'var(--color-background-primary)'};
  padding-left: 2rem;
  padding-right: 2rem;

  border: none;
  box-shadow: none;

  &:hover,
  &:focus {
    cursor: pointer;
    background: var(--color-background-secondary);
  }

  @media (min-width: 700px) {
    border-left: 2px solid var(--color-background-secondary);
  }

  @media (max-width: 700px) {
    border-bottom: 2px solid var(--color-background-secondary);
    min-width: 200px;
    justify-content: center;
  }
`;

const Highlight = styled.div<{activeTabId: number}>`
  width: 3px;
  height: var(--nav-tab-height);
  border-radius: 3px;

  position: absolute;
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
    bottom: 0rem;
    left: 0;
  }
`;

interface VerticalNavbarProps {
  jobs: JobsQuery[];
  activeTabId: number;
  onClick: (id: number) => void;
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
  tabs: MutableRefObject<(HTMLButtonElement | null)[]>;
}

const VerticalNavbar: React.FC<VerticalNavbarProps> = ({
  jobs,
  activeTabId,
  onClick,
  onKeyDown,
  tabs,
}) => (
  <NavContainer
    // role="tablist"
    // aria-label="Job tabs"
    onKeyDown={onKeyDown}
  >
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
          // ref={element => (tabs.current[index] = element)}
          // role="tab"
          // id={`jobs-list-${index}`}
          // tabIndex={activeTabId === index ? 0 : -1}
          // tabIndex={0}
          // aria-selected={activeTabId === index ? true : false}
          // aria-controls={`jobs-list-${index}`}
        >
          {company}
        </NavItem>
      ),
    )}

    <Highlight activeTabId={activeTabId} />
  </NavContainer>
);

export default VerticalNavbar;
