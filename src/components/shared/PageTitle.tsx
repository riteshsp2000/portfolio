import React from 'react';

// Libraries
import styled from 'styled-components';

// Constants
import {BREAKPOINTS} from '../../theming';

function PageTitle({children}: {children: React.ReactNode}): JSX.Element {
  return <Heading>{children}</Heading>;
}

export default PageTitle;

const Heading = styled.h3`
  color: var(--color-text);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  font-size: 45px;
  line-height: 1.6;
  text-shadow: 1px 1px 2px var(--color-text);
  padding-top: 40px;

  @media ${BREAKPOINTS.md} {
    padding-top: 10px;
    font-size: 30px;
  }
`;
