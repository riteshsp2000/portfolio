/* eslint-disable arrow-body-style */
import React from 'react';

// Libraries
import {PageProps} from 'gatsby';

// Components
import {
  RegularTemplate,
  RegularRowOne,
  RegularRowTwo,
} from '../components/templates';
import {UnderDevelopment} from '../components';

const Blog: React.FC<PageProps> = ({location}) => {
  return (
    <RegularTemplate location={location}>
      <RegularRowOne />

      <RegularRowTwo>
        <UnderDevelopment />
      </RegularRowTwo>
    </RegularTemplate>
  );
};

export default Blog;
