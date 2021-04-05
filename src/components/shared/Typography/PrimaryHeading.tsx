import React from 'react';

// Libraries
import styled from 'styled-components';

function PrimaryHeading({children}: {children: React.ReactNode}): JSX.Element {
  return <Heading>{children}</Heading>;
}

export default PrimaryHeading;

const Heading = styled.h3`
  color: var(--color-primary-heading);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  font-size: 22px;
  line-height: 1.6;
`;
