import React, {useState, useEffect} from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';

// Components
import {ThemeToggle, P2, H3} from '..';
import Container from '../shared/layout/Container';

// Assets and Types
import {Z_INDICES} from '../../theming';
import {LinkObject} from './Navbar';

const NavContainer = styled.nav`
  width: 100%;
  height: 80px;
  background: transparent;

  position: fixed;
  top: 0;
  bottom: 0;
  z-index: ${Z_INDICES.sidebar};

  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

const InnerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({navItems}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Function to Identify scrollOffset for the Navbar
  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      const scrollHeight = window.innerWidth > 800 ? 400 : 200;

      if (window.pageYOffset > scrollHeight) {
        setIsBackgroundVisible(true);
      } else {
        setIsBackgroundVisible(false);
      }
    }
  };

  // OnClick handler for tabs to set active tab
  const toggleActiveTab = (id: string) => setActiveTab(id);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', toggleVisibility);
      }
    };
  }, []);

  return (
    <NavContainer>
      <InnerContainer>
        <H3>Ritesh Patil</H3>

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
