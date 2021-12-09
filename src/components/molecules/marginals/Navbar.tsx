import React, {useState} from 'react';

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
  // {
  //   name: 'Resume',
  //   link: '/resume.pdf',
  //   active: true,
  //   id: 'nav-item-5',
  //   delay: 400,
  // },
];

export type LinkObject = {
  name: string;
  link: string;
  active: boolean;
  id: string;
  delay: number;
};

const Navbar: React.FC<{isBlogPage: boolean}> = ({isBlogPage}) => {
  const isMobileView = useMediaQuery('(max-width: 700px)');
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [bgColor, setBgColor] = useState('transparent');

  // OnClick handler for tabs to set active tab
  const toggleActiveTab = (id: string) => setActiveTab(id);

  // Function to Identify scrollOffset for the Navbar
  const toggleVisibility = () => {
    if (typeof window !== 'undefined') {
      if (window.pageYOffset > 40 && window.pageYOffset < 400) {
        setBgColor(() =>
          isBlogPage
            ? 'var(--color-background-secondary)'
            : 'var(--color-background-primary)',
        );
      } else if (window.pageYOffset >= 400 && window.pageYOffset < 500) {
        setBgColor(() =>
          isBlogPage ? 'transparent' : 'var(--color-background-primary)',
        );
      } else if (window.pageYOffset >= 500) {
        setBgColor('var(--color-background-primary)');
      } else {
        setBgColor('transparent');
      }
    }
  };

  useEventListener('scroll', toggleVisibility);

  const COMMON_PROPS = {
    navItems,
    activeTab,
    toggleActiveTab,
    bgColor,
  };

  return isMobileView ? (
    <MobileNavbar {...COMMON_PROPS} />
  ) : (
    <DesktopNavbar {...COMMON_PROPS} />
  );
};

export default Navbar;
