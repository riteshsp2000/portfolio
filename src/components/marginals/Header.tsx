import React from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';

// Components
import {ThemeToggle} from '../shared';
import HamburgerMenu from './HamburgerMenu';
import MobileNavContainer from './MobileNavContainer';

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

function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <DesktopHeaderContainer>
        <Link to="/" style={{textDecoration: 'none'}}>
          <StyledH3>Ritesh Patil</StyledH3>
        </Link>

        <NavContainer>
          {NAV.map(({name, link}) => (
            <NavOptionContainer key={link}>
              <Link to={link} style={{textDecoration: 'none'}}>
                <NavOptionH4>{name}</NavOptionH4>
              </Link>
            </NavOptionContainer>
          ))}
        </NavContainer>

        <ThemeToggle />
      </DesktopHeaderContainer>

      <MobileHeaderContainer>
        <Link to="/" style={{textDecoration: 'none', zIndex: 10001}}>
          <StyledH3>Ritesh Patil</StyledH3>
        </Link>
        <HamburgerMenu
          open={menuOpen}
          onClick={() => setMenuOpen(current => !current)}
        />
      </MobileHeaderContainer>

      <MobileNavContainer open={menuOpen} />
    </>
  );
}

export default Header;

const DesktopHeaderContainer = styled.header`
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

const StyledH3 = styled.h3`
  font-family: var(--font-family);
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
  font-size: 24px;
  cursor: pointer;

  @media ${BREAKPOINTS.md} {
    position: relative;
    z-index: 10001;
  }
`;

const NavContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  padding: 0px;
  margin: 0px;
`;

const NavOptionContainer = styled.li`
  margin: 10px;
  height: 100%;
`;

const NavOptionH4 = styled.h4`
  color: var(--color-text);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 16px;
  padding: 10px;
`;

const MobileHeaderContainer = styled.header`
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
  position: relative;

  @media ${BREAKPOINTS.md} {
    display: block;
  }
`;
