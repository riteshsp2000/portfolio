import React, {useState, useEffect} from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';

// Components
import {ThemeToggle, P2, H3, Container} from '..';

// Assets
import {Z_INDICES} from '../../theming';

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

const navItemsDefault = [
  {
    name: 'About',
    link: '/href',
    active: true,
    id: 'nav-item-1',
  },
  {
    name: 'Projects',
    link: '/projects',
    active: true,
    id: 'nav-item-2',
  },
  {
    name: 'Blog',
    link: '/blog',
    active: true,
    id: 'nav-item-3',
  },
  {
    name: 'Photos',
    link: '/photos',
    active: true,
    id: 'nav-item-4',
  },
  {
    name: 'Contact',
    link: '/contact',
    active: true,
    id: 'nav-item-5',
  },
];

export type LinkObject = {
  name: string;
  link: string;
  active: boolean;
  id: string;
};

export interface DesktopNavbarProps {
  navItems?: LinkObject[];
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  navItems = navItemsDefault,
}) => {
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
                <NavLink id={id} to={link} onClick={() => toggleActiveTab(id)}>
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
