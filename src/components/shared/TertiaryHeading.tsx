import React from 'react';

// Libraries
import styled from 'styled-components';

function SecondaryHeading({
  children,
  capitalize = true,
}: {
  children: React.ReactNode;
  capitalize?: boolean;
}): JSX.Element {
  return <Heading capitalize={capitalize}>{children}</Heading>;
}

SecondaryHeading.defaultProps = {
  capitalize: true,
};

export default SecondaryHeading;

const Heading = styled.h3<{capitalize: boolean}>`
  color: var(--color-secondary);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  font-size: 16px;
  line-height: 1.6;
  text-transform: ${({capitalize}) => (capitalize ? 'uppercase' : '')};
`;
