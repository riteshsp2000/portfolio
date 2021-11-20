import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {H3} from '@components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Highlight = styled.span`
  font-weight: var(--font-weight-bold);
`;

const Line = styled.div`
  height: 2px;
  width: auto;
  flex-grow: 1;
  margin-left: 2rem;
  background: var(--color-text-primary);
  border-radius: 1px;
`;

const SectionTitle: React.FC<{title: string; highlight: string}> = ({
  title,
  highlight,
}) => (
  <Container>
    <H3
      style={{
        fontWeight: 'var(--font-weight-light)',
      }}
    >
      {`${title} `}
      <Highlight>{highlight}</Highlight>
    </H3>

    <Line />
  </Container>
);

export default SectionTitle;
