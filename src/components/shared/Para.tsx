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

const Heading = styled.p`
  color: var(--color-text);
  font-weight: var(--font-weight-light);
  font-family: var(--font-family);
  font-size: 16px;
  line-height: 1.6;
`;
