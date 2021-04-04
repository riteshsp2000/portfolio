import React from 'react';

// Components
import MobileNavContainer from './MobileNav';
import DesktopNavContainer from './DesktopNav';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  // Function to Identify scrollOffset for the Navbar
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

  // Function Returning new scroll object
  const newScrollObject = () => {
    // eslint-disable-next-line
    const SmoothScroll = require('smooth-scroll');
    return new SmoothScroll();
  };

  const handleScroll = (id: string | null) => {
    if (typeof window !== 'undefined' && id) {
      const scroll = newScrollObject();
      const anchor = document.getElementById(id);
      scroll.animateScroll(anchor);
    }
  };

  const handleScrollToTop = () => {
    if (typeof window !== 'undefined') {
      const isHome = window.location.pathname === '/';
      if (isHome) {
        const scroll = newScrollObject();
        scroll.animateScroll(0);
      }
    }
  };

  React.useEffect(() => {
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
    <>
      <DesktopNavContainer
        isVisible={isVisible}
        handleScroll={handleScroll}
        handleScrollToTop={handleScrollToTop}
      />

      <MobileNavContainer
        isVisible={isVisible}
        handleScrollToTop={handleScrollToTop}
      />
    </>
  );
};

export default Header;
