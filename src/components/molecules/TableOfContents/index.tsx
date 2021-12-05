import React, {useState} from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {P3, P1} from '@components';

const Item = styled(P3)<{isActive: boolean}>`
  color: ${({isActive}) =>
    isActive ? 'var(--color-text-secondary)' : 'var(--color-text-tertiary)'};

  &:hover {
    color: ${({isActive}) =>
      isActive ? 'var(--color-text-secondary)' : 'var(--color-text-primary)'};
    cursor: pointer;
  }
`;

const Title = styled(P1)`
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const TableOfContents = () => {
  const [activeId, setActiveId] = useState(0);

  const items = [
    {
      value: 'Introduction',
      id: 1,
    },
    {
      value: 'What are Hooks?',
      id: 2,
    },
    {
      value: 'Why use custom hooks?',
      id: 3,
    },
    {
      value: 'Precautions to be followed',
      id: 4,
    },
  ];

  return (
    <>
      <Title>Table of Contents</Title>

      {items.map(({value, id}) => (
        <Item
          isActive={activeId === id}
          key={id}
          onClick={() => setActiveId(id)}
        >
          {value}
        </Item>
      ))}
    </>
  );
};

export default TableOfContents;
