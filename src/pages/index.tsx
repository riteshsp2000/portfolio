/* eslint-disable arrow-body-style */
import React from 'react';

// Components
import {
  RegularTemplate,
  LayoutFirstRow,
  LayoutSecondRow,
} from '../components/templates';
import {Landing} from '../components';

const Home: React.FC = () => {
  return (
    <RegularTemplate>
      <LayoutFirstRow />

      <LayoutSecondRow>
        <Landing />
        <Landing />
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
