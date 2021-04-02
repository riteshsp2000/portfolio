import {Link} from 'gatsby';
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {ThemeToggle} from '../shared';

// Constants
import {BREAKPOINTS} from '../../theming';

const NAV = [
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Photography',
    link: '/photography',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

function MobileNavContainer({open}: {open: boolean}): JSX.Element {
  return (
    <NavContainer open={open}>
      <ul>
        {NAV.map(({name, link}) => (
          <Link key={link} to={link} style={{textDecoration: 'none'}}>
            <NavOptionH4 open={open}>{name}</NavOptionH4>
          </Link>
        ))}

        <PositionalSpan>
          <ThemeToggle />
        </PositionalSpan>
      </ul>
    </NavContainer>
  );
}

export default MobileNavContainer;

const NavContainer = styled.div<{open: boolean}>`
  position: absolute;
  inset: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  background-color: transparent;
  opacity: ${({open}) => (open ? '0.99' : '0')};
  transition: opacity 500ms ease 0s, background-color 500ms ease 0s;

  pointer-events: none;
  overflow-x: hidden;
  overflow-y: hidden;

  @media ${BREAKPOINTS.md} {
    pointer-events: auto;
    background-color: var(--color-background);
    padding-right: 30px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const NavOptionH4 = styled.h4<{open: boolean}>`
  color: var(--color-text);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 32px;
  text-align: right;

  padding: 10px;
  transform: ${({open}) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 500ms ease 0s;
`;

const PositionalSpan = styled.span`
  width: 100%;
  height: 50px;

  margin-top: 30px;
  padding: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
