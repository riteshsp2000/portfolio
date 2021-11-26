import React, {useState, useEffect} from 'react';

// Components
import {DesktopNavbar, MobileNavbar} from '@components';

// Hooks
import {useMediaQuery, useEventListener} from '@hooks';

export const navItems = [
  {
    name: 'About',
    link: '/about',
    active: true,
    id: 'nav-item-1',
    delay: 0,
  },
  {
    name: 'Projects',
    link: '/projects',
    active: true,
    id: 'nav-item-2',
    delay: 100,
  },
  {
    name: 'Blog',
    link: '/blog',
    active: true,
    id: 'nav-item-3',
    delay: 200,
  },
  {
    name: 'Photos',
    link: '/photos',
    active: true,
    id: 'nav-item-4',
    delay: 300,
  },
  {
    name: 'Contact',
    link: '/playground',
    active: true,
    id: 'nav-item-5',
    delay: 400,
  },
];

export type LinkObject = {
  name: string;
  link: string;
  active: boolean;
  id: string;
  delay: number;
};

const Navbar = () => {
  const isMobileView = useMediaQuery('(max-width: 700px)');
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);

  // OnClick handler for tabs to set active tab
  const toggleActiveTab = (id: string) => setActiveTab(id);

  // Function to Identify scrollOffset for the Navbar
  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      const scrollHeight = 40;

      if (window.pageYOffset > scrollHeight) {
        setIsBackgroundVisible(true);
      } else {
        setIsBackgroundVisible(false);
      }
    }
  };

  useEventListener('scroll', toggleVisibility);

  const COMMON_PROPS = {
    navItems,
    isBackgroundVisible,
    activeTab,
    toggleActiveTab,
  };

  return isMobileView ? (
    <MobileNavbar {...COMMON_PROPS} />
  ) : (
    <DesktopNavbar {...COMMON_PROPS} />
  );
};

export default Navbar;
