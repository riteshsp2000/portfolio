import React from 'react';

// Libraries
import styled from 'styled-components';
import {graphql} from 'gatsby';

// Components
import {
  Flexbox,
  FancyText,
  H3,
  WorkExperience,
  SectionTitle,
  FeaturedProject,
} from '@components';

import Lottie from 'react-lottie';

import {BREAKPOINTS} from '@theme';

import * as animationData from '../images/landing.json';

const SectionContainer = styled(Flexbox)`
  width: 100%;
  height: calc(100vh - 90px);
`;

const ImgContainer = styled(Flexbox)`
  width: 35%;
  height: 260px;

  @media ${BREAKPOINTS.md} {
    width: 100%;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const Fancy = styled(FancyText)`
  font-size: 4.5rem;
  text-align: center;

  @media ${BREAKPOINTS.md} {
    font-size: 2.5rem;
  }
`;

const Subtext = styled(H3)`
  color: var(--color-text-tertiary);
  margin-bottom: 2rem;
  width: 45%;
  text-align: center;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.4;

  @media ${BREAKPOINTS.md} {
    width: 100%;
  }
`;

export const pageQuery = graphql`
  {
    featured: allMdx(
      filter: {fileAbsolutePath: {regex: "/content/projects/featured/"}}
      sort: {fields: frontmatter___date, order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            github
            img
            live
            tech
            type
          }
        }
      }
    }
  }
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Home: React.FC = ({
  // @ts-ignore
  data: {
    featured: {edges: featured},
  },
}) => (
  <>
    <SectionContainer flexColumn alignCenter justifyCenter>
      <ImgContainer>
        <Lottie options={defaultOptions} height={'auto'} width={'100%'} />
      </ImgContainer>

      <Fancy>{"Hi, I'm Ritesh Patil"}</Fancy>

      <Subtext>
        A Software developer specialising in building performant frontend
        applications
      </Subtext>
    </SectionContainer>

    <SectionTitle title="Work" highlight="Experience" />
    <div style={{height: '8rem'}} />
    <WorkExperience />
    <div style={{height: '8rem'}} />

    <SectionTitle title="Featured" highlight="Projects" />
    <div style={{marginBottom: '3rem'}} />
    {/* @ts-ignore */}
    {featured.slice(0, 3).map(({node: {frontmatter}}, index) => (
      <FeaturedProject
        key={frontmatter.title}
        {...frontmatter}
        flip={index % 2 !== 0}
      />
    ))}
  </>
);

export default Home;
