import React, {useState} from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';
import {useTransition, animated} from 'react-spring';

// Components
import {
  H3,
  H2,
  HamburgerMenu,
  ThemeToggle,
  InAppLink,
  RedirectLink,
} from '@components';
import Container from '../../atoms/layout/Container';

// Assets
import {Z_INDICES} from '@theme';
import {LinkObject} from './Navbar';

const OverlayContainer = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: fixed;
  top: 0px;
  left: 0px;

  background: var(--color-background-primary);
  transition: var(--transition-bg);
  z-index: ${Z_INDICES.titlebar};
`;

const OverlayNavContainer = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 1.5rem;
`;

const OverlayControlsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  margin-right: 1.5rem;
  margin-bottom: 3rem;
`;

const PrimeContainer = styled.div<{bgColor: string}>`
  width: 100%;
  max-width: 100vw;
  height: 80px;

  position: fixed;
  top: 0px;
  left: 0px;
  z-index: ${Z_INDICES.titlebar + 1};

  background: ${({bgColor}) => bgColor};
  transition: var(--transition-bg);
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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
  activeTab: null | string;
  toggleActiveTab: (id: string) => void;
  bgColor: string;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({
  navItems,
  activeTab,
  toggleActiveTab,
  bgColor,
}) => {
  /**
   * - showMenu is used for the overlay display and
   * by extension the navItems display
   * - showTabs is required for react-spring animation
   * it internally adds objects of navItems as per the animation
   */
  const [showMenu, setShowMenuOpen] = useState(false);
  const [showTabs, setShowTabs] = useState<[] | LinkObject[]>([]);

  /**
   * react Spring transition function for navbar overlay
   * nav items shown when hamburger menu clicked
   */
  const overlayTransition = useTransition(showMenu, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {duration: 100},
  });

  /**
   * navItems entry transition function.
   * entry for each item going down is delayed by 100ms
   * delay for each item is different hence is obtained from the array
   */
  const tabsTransition = useTransition(showTabs, {
    from: {marginRight: '-100%'},
    enter: item => next => next({marginRight: '0%', delay: item.delay}),
    leave: {marginRight: '-100%'},
  });

  const hamMenuClick = () => {
    if (typeof window !== 'undefined') {
      if (!showMenu) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }

    setShowMenuOpen(c => !c);
    setShowTabs(c => (c.length ? [] : navItems));
  };

  return (
    <>
      <PrimeContainer bgColor={bgColor}>
        <NavContainer>
          <InAppLink to="/">
            <H3>Ritesh Patil</H3>
          </InAppLink>

          <HamburgerMenu onClick={hamMenuClick} open={showMenu} />
        </NavContainer>
      </PrimeContainer>

      {overlayTransition(
        (style, item) =>
          item && (
            <OverlayContainer style={style}>
              <OverlayNavContainer>
                {tabsTransition(
                  (tabStyle, tabItem) =>
                    tabItem && (
                      <animated.div key={tabItem.id} style={tabStyle}>
                        <NavLink
                          to={tabItem.link}
                          onClick={() => {
                            toggleActiveTab(tabItem.id);
                            setShowMenuOpen(false);
                          }}
                        >
                          <NavItem isActive={activeTab === tabItem.id}>
                            {tabItem.name}
                          </NavItem>
                        </NavLink>
                      </animated.div>
                    ),
                )}
                <OverlayControlsContainer>
                  <ThemeToggle />
                </OverlayControlsContainer>
              </OverlayNavContainer>
            </OverlayContainer>
          ),
      )}
    </>
  );
};

export default NavbarMobile;
