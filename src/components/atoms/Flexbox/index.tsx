/* eslint-disable max-len */
import React from 'react';

import styled from 'styled-components';

interface FlexboxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  justifyStart?: boolean;
  justifyCenter?: boolean;
  justifyEnd?: boolean;
  justifyAround?: boolean;
  justifyBetween?: boolean;
  justifyEvenly?: boolean;
  alignStart?: boolean;
  alignCenter?: boolean;
  alignEnd?: boolean;
  flexColumn?: boolean;
  flexWrap?: boolean;
  flexReverse?: boolean;
}

export default styled.div<FlexboxProps>`
  display: flex;
  flex-direction: ${({flexColumn, flexReverse}) =>
    flexColumn
      ? flexReverse
        ? 'column-reverse'
        : 'column'
      : flexReverse
      ? 'row-reverse'
      : 'row'};

  justify-content: flex-start;
  justify-content: ${({justifyStart}) => justifyStart && 'flex-start'};
  justify-content: ${({justifyCenter}) => justifyCenter && 'center'};
  justify-content: ${({justifyEnd}) => justifyEnd && 'flex-end'};
  justify-content: ${({justifyAround}) => justifyAround && 'flex-start'};
  justify-content: ${({justifyBetween}) => justifyBetween && 'flex-start'};
  justify-content: ${({justifyEvenly}) => justifyEvenly && 'flex-start'};

  align-items: flex-start;
  align-items: ${({alignStart}) => alignStart && 'flex-start'};
  align-items: ${({alignCenter}) => alignCenter && 'center'};
  align-items: ${({alignEnd}) => alignEnd && 'flex-end'};

  flex-wrap: ${({flexWrap}) => flexWrap && 'wrap'};
`;
