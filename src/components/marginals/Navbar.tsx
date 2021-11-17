import React from 'react';

// Components
import {DesktopNavbar, MobileNavbar} from '..';

// Hooks
import {useMediaQuery} from '../../hooks';

const navItems = [
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
    link: '/contact',
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

  return isMobileView ? (
    <MobileNavbar navItems={navItems} />
  ) : (
    <DesktopNavbar navItems={navItems} />
  );
};

export default Navbar;
