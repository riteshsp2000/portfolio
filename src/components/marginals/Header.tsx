import React from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';
// import SmoothScroll from 'smooth-scroll';

// Components
import {ThemeToggle} from '../shared';
import MobileNavContainer from './MobileNavContainer';

// Constants
import {BREAKPOINTS} from '../../theming';
import config from '../../config';

const NAV = config.navLinks;

function Header(): JSX.Element {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      const scrollHeight = window.innerWidth > 800 ? 400 : 200;

      if (window.pageYOffset > scrollHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
    }
  }, []);

  const handleScroll = (id: string | null) => {
    if (typeof window !== 'undefined' && id) {
      // eslint-disable-next-line
      const SmoothScroll = require('smooth-scroll');
      const scroll = new SmoothScroll();
      const anchor = document.getElementById(id);
      scroll.animateScroll(anchor);
    }
  };

  return (
    <>
      <DesktopHeaderContainer isVisible={isVisible}>
        <Link to="/" style={{textDecoration: 'none'}}>
          <StyledH3>Ritesh Patil</StyledH3>
        </Link>

        <NavContainer>
          {NAV.map(({name, link, id}) => (
            <NavOptionContainer key={link}>
              <Link
                onClick={() => handleScroll(id)}
                to={link}
                style={{textDecoration: 'none'}}
              >
                <NavOptionH4>{name}</NavOptionH4>
              </Link>
            </NavOptionContainer>
          ))}
        </NavContainer>

        <ThemeToggle />
      </DesktopHeaderContainer>

      <MobileNavContainer isVisible={isVisible} />
    </>
  );
}

export default Header;

const DesktopHeaderContainer = styled.header<{isVisible: boolean}>`
  width: 100%;
  max-width: 1100px;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 32px;

  position: fixed;
  transform: translate(-50%, 0%);
  top: 0px;
  left: 50%;
  z-index: 10000;

  background: ${({isVisible}) =>
    isVisible ? 'var(--color-background)' : 'transparent'};
  transition: background 350ms ease 0s;

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
