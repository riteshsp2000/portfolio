/* eslint-disable arrow-body-style */
import React from 'react';

// Components
import {
  RegularTemplate,
  LayoutFirstRow,
  LayoutSecondRow,
  PrimaryHeading,
  SecondaryHeading,
  TertiaryHeading,
  Para,
} from '../components';

const Home: React.FC = () => {
  return (
    <RegularTemplate>
      <LayoutFirstRow />

      <LayoutSecondRow>
        <PrimaryHeading>Hello Its Second Me!</PrimaryHeading>
        <SecondaryHeading>Hello Its Second Me!</SecondaryHeading>
        <TertiaryHeading>Hello Its Second Me!</TertiaryHeading>
        <Para>Hello Its Second Me!</Para>
      </LayoutSecondRow>
    </RegularTemplate>
  );
};

export default Home;
