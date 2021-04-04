import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {Links, Email} from '../shared';

// Constants
import {BREAKPOINTS} from '../../theming';

// ======================= Second Row ======================= //
interface Props {
  isLoading?: boolean;
}

const RegularRowTwo: React.FC<Props> = ({isLoading, children}) => (
  <>
    <Links />
    <SecondRow>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {isLoading});
        }
        return child;
      })}
    </SecondRow>
    <Email />
  </>
);

export default RegularRowTwo;

// ======================= Styles ======================= //

const SecondRow = styled.div`
  width: 85%;
  height: 100%;
  max-width: 1100px;
  min-height: calc(100vh - 400px);

  padding: 0px 32px;
  margin-left: auto;
  margin-right: auto;

  @media ${BREAKPOINTS.sm} {
    padding: 0px 16px;
    min-height: calc(100vh - 200px);
  }
`;
