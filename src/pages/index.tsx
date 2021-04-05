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
import {Landing, About, Projects} from '../components';

const Home: React.FC<PageProps> = ({location}) => {
  return (
    <RegularTemplate location={location}>
      <RegularRowOne />

      <RegularRowTwo>
        <Landing />
        <About />
        <Projects />
      </RegularRowTwo>
    </RegularTemplate>
  );
};

export default Home;
