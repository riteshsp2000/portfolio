import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {PageContainer, Navbar, Footer, Container} from '@components';

export interface PageLayouts {
  pathname: string;
}

const PrimaryContainer = styled.div`
  background: var(--color-background-primary);
`;

const Box = styled.div`
  width: 100vw;
  height: 500px;
  background: var(--color-background-secondary);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Layout: React.FC<PageLayouts> = ({children, pathname}) => {
  const isBlogPage = pathname.split('/')[1] === 'blog';

  return (
    <PrimaryContainer>
      {isBlogPage && <Box />}

      <PageContainer style={{zIndex: 1}}>
        <Navbar isBlogPage={isBlogPage} />

        <Container>{children}</Container>

        <Footer />
      </PageContainer>
    </PrimaryContainer>
  );
};

export default Layout;
