import React, {useState} from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';

// Components
import Container from '../shared/layout/Container';
import {H3, H2} from '..';

// Assets
import {Z_INDICES} from '../../theming';
import {LinkObject} from './Navbar';

const OverlayContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0px;
  left: 0px;

  background: var(--color-background-primary);
  transition: var(--transition);
  z-index: ${Z_INDICES.titlebar};
`;

const OverlayNavContainer = styled.nav``;

const PrimeContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 80px;

  position: absolute;
  top: 0px;
  left: 0px;
  z-index: ${Z_INDICES.titlebar + 1};
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled(H2)<{isActive: boolean}>`
  width: 100%;
  text-align: right;
  padding: 0px 0.7rem;
  color: ${({isActive}) =>
    isActive ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)'};
`;

const NavLink = styled(Link)`
  text-decoration: none;
`;

export interface NavbarMobileProps {
  navItems: LinkObject[];
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({navItems}) => {
  const [showMenu, setShowMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // OnClick handler for tabs to set active tab
  const toggleActiveTab = (id: string) => setActiveTab(id);

  return (
    <>
      <PrimeContainer>
        <NavContainer>
          <H3>Ritesh Patil</H3>
        </NavContainer>

        {showMenu && (
          <OverlayContainer>
            <OverlayNavContainer>
              {navItems.map(
                ({name, link, active, id}) =>
                  active && (
                    <NavLink
                      key={id}
                      to={link}
                      onClick={() => toggleActiveTab(id)}
                    >
                      <NavItem isActive={activeTab === id}>{name}</NavItem>
                    </NavLink>
                  ),
              )}
            </OverlayNavContainer>
          </OverlayContainer>
        )}
      </PrimeContainer>
    </>
  );
};

export default NavbarMobile;
