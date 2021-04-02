/* eslint-disable arrow-body-style */
import React from 'react';

// Libraries
import {PageProps} from 'gatsby';

// Components
import {
  RegularTemplate,
  LayoutFirstRow,
  LayoutSecondRow,
} from '../components/templates';
import {Landing, About} from '../components';

const Home: React.FC<PageProps> = ({location}) => {
  return (
    <RegularTemplate location={location}>
      <LayoutFirstRow />

      <LayoutSecondRow>
        <Landing />
        <About />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
      </LayoutSecondRow>
    </RegularTemplate>
  );
};

export default Home;
