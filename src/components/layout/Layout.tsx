import React from 'react';

// Components
import {PageContainer, Navbar, Footer, Container} from '..';

const Layout: React.FC = ({children}) => {
  return (
    <PageContainer>
      <Navbar />

      <Container>{children}</Container>

      <Footer />
    </PageContainer>
  );
};

export default Layout;
