import {Link} from 'gatsby';
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {ThemeToggle} from '../shared';
import HamburgerMenu from './HamburgerMenu';

// Constants
import {BREAKPOINTS} from '../../theming';
import config from '../../config';

const NAV = config.navLinks;

interface Props {
  isVisible: boolean;
  handleScrollToTop: () => void;
}

const MobileNav: React.FC<Props> = ({isVisible, handleScrollToTop}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <MobileHeaderContainer isVisible={isVisible}>
        <Link
          to="/"
          onClick={handleScrollToTop}
          style={{textDecoration: 'none', zIndex: 10001}}
          tabIndex={0}
        >
          <StyledH3>{config.name}</StyledH3>
        </Link>
        <HamburgerMenu
          open={menuOpen}
          onClick={() => setMenuOpen(current => !current)}
        />
      </MobileHeaderContainer>

      <NavContainer open={menuOpen}>
        <ul>
          {NAV.map(({name, link}) => (
            <NavOptionLi key={link} open={menuOpen}>
              <Link
                onClick={() => setMenuOpen(false)}
                to={link}
                style={{textDecoration: 'none', color: 'var(--color-text)'}}
              >
                {name}
              </Link>
            </NavOptionLi>
          ))}

          <NavOptionIconLi>
            <ThemeToggle />
          </NavOptionIconLi>
        </ul>
      </NavContainer>
    </>
  );
};

export default MobileNav;

const MobileHeaderContainer = styled.header<{isVisible: boolean}>`
  width: 100%;
  padding: 20px 32px;

  display: none;
  position: fixed;
  top: 0;
  z-index: 10000;
  background-color: ${({isVisible}) =>
    isVisible ? 'var(--color-background)' : 'transparent'};
  transition: background-color 500ms ease 0s;

  @media ${BREAKPOINTS.md} {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const NavContainer = styled.nav<{open: boolean}>`
  position: fixed;
  inset: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 9999;

  background-color: transparent;
  opacity: ${({open}) => (open ? '0.99' : '0')};
  transition: opacity 500ms ease 0s, background-color 500ms ease 0s;

  display: none;
  pointer-events: ${({open}) => (open ? 'auto' : 'none')};
  touch-action: none;
  overflow-x: hidden;
  overflow-y: hidden;

  @media ${BREAKPOINTS.md} {
    background-color: var(--color-background);
    padding-right: 30px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

const NavOptionLi = styled.li<{open: boolean}>`
  color: var(--color-text);
  font-family: var(--font-family);
  font-weight: var(--font-weight-bold);
  font-size: 32px;
  text-align: right;

  padding: 10px;
  transform: ${({open}) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 500ms ease 0s;
`;

const NavOptionIconLi = styled.li`
  width: 100%;
  height: 50px;

  margin-top: 30px;
  padding: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
