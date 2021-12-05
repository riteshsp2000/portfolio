import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {
  Breadcrumb,
  H1,
  Flexbox,
  P2,
  H2,
  P1,
  Quote,
  CoverImage,
  TableOfContents,
  InlineCode,
  Strong,
} from '@components';
import {BREAKPOINTS} from '@theme';

const TopContainer = styled(Flexbox)`
  width: 100%;
  height: 404px;
  padding-bottom: 80px;

  @media ${BREAKPOINTS.sm} {
    height: 250px;
    padding-bottom: 40px;
  }
`;

const GridContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 500px);
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;

  @media ${BREAKPOINTS.md} {
    grid-template-columns: 1fr;
  }
`;

const ContentContainer = styled.div`
  grid-column: 1 / span 1;

  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-right: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Aside = styled.aside`
  grid-column: 2 / span1;
  position: -webkit-sticky;
  position: sticky;
  top: 150px;
  margin-left: 1rem;

  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

export default () => {
  return (
    <div>
      <TopContainer flexColumn justifyEnd alignStart>
        <Breadcrumb />

        <H1>Custom React Hooks to make life easy...</H1>
      </TopContainer>

      <GridContainer>
        <ContentContainer>
          <CoverImage
            // eslint-disable-next-line max-len
            src="https://res.cloudinary.com/riteshp2000/image/upload/v1638601340/portfolio/v2/Things-You-Should-Know-About-React-Hooks_slwxim.webp"
            alt="Cover Image"
            aspectRatio="16/9"
          />

          <H2>Some fancy ass title</H2>

          <P2 style={{textAlign: 'justify'}}>
            <em>React</em> has <Strong>undergone</Strong> modifications in the
            previous three years, resulting in significant change in the way
            react apps are built. The most significant modifications are the
            Functional Component Pattern and Hooks.{' '}
            <InlineCode>react-redux</InlineCode>
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <Quote>
            <P1>Some fancy ass title</P1>

            <P2>
              React has undergone significant modifications in the previous
              three years, resulting in significant change in the way react apps
              are built. The most significant modifications are the Functional
              Component Pattern and Hooks.
            </P2>
          </Quote>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <H2>Some fancy ass title</H2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>
          <H2>Some fancy ass title</H2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>
          <H2>Some fancy ass title</H2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>
          <H2>Some fancy ass title</H2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>
        </ContentContainer>

        <div>
          <Aside>
            <TableOfContents />
          </Aside>
        </div>
      </GridContainer>
    </div>
  );
};
