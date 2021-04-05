import React from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';

// Components
import {ThemeToggle} from '../shared';

// Constants
import {BREAKPOINTS} from '../../theming';
import config from '../../config';

const NAV = config.navLinks;

interface Props {
  isVisible: boolean;
  handleScrollToTop: () => void;
  handleScroll: (id: string | null) => void;
}

const DesktopNav: React.FC<Props> = ({
  isVisible,
  handleScrollToTop,
  handleScroll,
}) => (
  <DesktopHeaderContainer isVisible={isVisible}>
    <Link
      to="/"
      onClick={() => handleScrollToTop()}
      style={{textDecoration: 'none'}}
      tabIndex={0}
    >
      <StyledH3>{config.name}</StyledH3>
    </Link>

    <NavUl>
      {NAV.map(({name, link, id}) => (
        <NavLi key={link}>
          <Link
            onClick={() => handleScroll(id)}
            to={link}
            style={{textDecoration: 'none'}}
          >
            <NavOptionH4>{name}</NavOptionH4>
          </Link>
        </NavLi>
      ))}
    </NavUl>

    <ThemeToggle />
  </DesktopHeaderContainer>
);

export default DesktopNav;

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

const NavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  padding: 0px;
  margin: 0px;
`;

const NavLi = styled.li`
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
