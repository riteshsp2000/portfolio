import React from 'react';

// Libraries
import styled from 'styled-components';

function SecondaryHeading({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <Heading>{children}</Heading>;
}

export default SecondaryHeading;

const Heading = styled.h4`
  color: var(--color-secondary-heading);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family);
  font-size: 17px;
  line-height: 1.6;
`;
