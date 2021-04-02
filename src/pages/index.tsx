/* eslint-disable arrow-body-style */
import React from 'react';

// Components
import {
  RegularTemplate,
  LayoutFirstRow,
  LayoutSecondRow,
  Landing,
} from '../components';

const Home: React.FC = () => {
  return (
    <RegularTemplate>
      <LayoutFirstRow />

      <LayoutSecondRow>
        <Landing />
      </LayoutSecondRow>
    </RegularTemplate>
  );
};

export default Home;
