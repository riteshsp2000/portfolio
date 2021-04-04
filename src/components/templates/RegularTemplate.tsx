import React, {useState, useEffect} from 'react';

// Libraries
import styled from 'styled-components';
import {PageRendererProps} from 'gatsby';

// Components
import {Loader2} from '../shared';

// ======================= Container ======================= //
const RegularTemplate: React.FC<PageRendererProps> = ({children, location}) => {
  const isHome = location?.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
          setTimeout(() => setIsLoading(false), 5000);
        }
      }, 0);
    }
  }, [isLoading, location.hash]);

  return (
    <Container>
      {isLoading && isHome && <Loader2 setLoading={setIsLoading} />}
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {isLoading});
        }
        return child;
      })}
    </Container>
  );
};

export default RegularTemplate;
// ======================= Styles ======================= //
const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;

  overflow-x: hidden;
  overflow-y: auto;

  background: var(--color-background);
  transition: color 350ms ease 0s, background 350ms ease 0s;
`;
