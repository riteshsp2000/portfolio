import React from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';

// Components
import {ThemeToggle, P2, H3, InAppLink} from '@components';
import Container from '../../atoms/layout/Container';

// Assets and Types
import {Z_INDICES} from '@theme';
import {LinkObject} from './Navbar';

const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  background: transparent;

  position: fixed;
  top: 0;
  bottom: 0;
  z-index: ${Z_INDICES.sidebar};

  @media (max-width: 700px) {
    display: none;
  }
`;

const InnerContainer = styled(Container)<{
  bgColor: string;
}>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({bgColor}) => bgColor};
`;

const NavItemsContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavItem = styled(P2)<{isActive: boolean}>`
  padding: 0px 0.7rem;
  color: ${({isActive}) =>
    isActive ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'};
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

export interface DesktopNavbarProps {
  navItems: LinkObject[];
  activeTab: null | string;
  toggleActiveTab: (id: string) => void;
  bgColor: string;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  navItems,
  activeTab,
  toggleActiveTab,
  bgColor,
}) => {
  return (
    <NavContainer>
      <InnerContainer bgColor={bgColor}>
        <InAppLink to="/">
          <H3>Ritesh Patil</H3>
        </InAppLink>

        <NavItemsContainer>
          {navItems.map(
            ({name, link, active, id}: LinkObject) =>
              active && (
                <NavLink key={id} to={link} onClick={() => toggleActiveTab(id)}>
                  <NavItem isActive={activeTab === id}>{name}</NavItem>
                </NavLink>
              ),
          )}
        </NavItemsContainer>
        <ThemeToggle />
      </InnerContainer>
    </NavContainer>
  );
};
export default DesktopNavbar;
