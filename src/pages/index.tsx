/* eslint-disable arrow-body-style */
import React from 'react';

// Components
import {RegularTemplate, LayoutFirstRow, LayoutSecondRow} from '../components';

const Home: React.FC = () => {
  return (
    <RegularTemplate>
      <LayoutFirstRow>
        <h3>Hello Its First Me!</h3>
      </LayoutFirstRow>

      <LayoutSecondRow>
        <h3>Hello Its Second Me!</h3>
      </LayoutSecondRow>
    </RegularTemplate>
  );
};

export default Home;
