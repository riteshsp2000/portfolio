/* eslint-disable arrow-body-style */
import React from 'react';

// Libraries
import {PageProps} from 'gatsby';
import styled from 'styled-components';

// Components
import {
  RegularTemplate,
  LayoutFirstRow,
  LayoutSecondRow,
} from '../components/templates';

const Blog: React.FC<PageProps> = ({location}) => {
  return (
    <RegularTemplate location={location}>
      <LayoutFirstRow />

      <LayoutSecondRow>
        <Styledh1>Blog</Styledh1>
      </LayoutSecondRow>
    </RegularTemplate>
  );
};

export default Blog;

const Styledh1 = styled.h1`
  width: 70%;
  line-height: 3;
  color: var(--color-tertiary);
  text-align: center;
  font-size: 70px;
  font-family: var(--font-family);
  background-color: var(--color-secondary);
  border-radius: 5px;
`;
