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
import {Landing, About} from '../components';

const Home: React.FC<PageProps> = ({location}) => {
  return (
    <RegularTemplate location={location}>
      <RegularRowOne />

      <RegularRowTwo>
        <Landing />
        <About />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
        <Landing />
      </RegularRowTwo>
    </RegularTemplate>
  );
};

export default Home;
