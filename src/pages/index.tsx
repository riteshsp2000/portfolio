/* eslint-disable arrow-body-style */
import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {
  RegularTemplate,
  LayoutFirstRow,
  LayoutSecondRow,
  PrimaryHeading,
  SecondaryHeading,
  TertiaryHeading,
  Para,
  Landing,
} from '../components';

const Home: React.FC = () => {
  return (
    <RegularTemplate>
      <LayoutFirstRow />

      <LayoutSecondRow>
        {/* <PrimaryHeading>Hello Its Second Me!</PrimaryHeading>
        <SecondaryHeading>Hello Its Second Me!</SecondaryHeading>
        <TertiaryHeading>Hello Its Second Me!</TertiaryHeading>
        <Para>Hello Its Second Me!</Para> */}

        <Landing />
      </LayoutSecondRow>
    </RegularTemplate>
  );
};

export default Home;
