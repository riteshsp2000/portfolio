import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {PageContainer, Navbar, Footer, Container} from '@components';
import {BREAKPOINTS} from '@theme';

export interface PageLayouts {
  pathname: string;
}

const PrimaryContainer = styled.div`
  background: var(--color-background-primary);
  transition: var(--transition);
`;

const Box = styled.div`
  width: 100vw;
  height: 500px;
  background: var(--color-background-secondary);
  transition: var(--transition);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  overflow-x: hidden;

  @media ${BREAKPOINTS.sm} {
    height: 350px;
  }
`;

const Layout: React.FC<PageLayouts> = ({children, pathname}) => {
  const isBlogPage = pathname.split('/')[1] === 'post';

  return (
    <PrimaryContainer>
      {isBlogPage && <Box />}

      <Navbar isBlogPage={isBlogPage} />

      <PageContainer style={{zIndex: 1}}>
        <Container>{children}</Container>
      </PageContainer>

      <Footer />
    </PrimaryContainer>
  );
};

export default Layout;
