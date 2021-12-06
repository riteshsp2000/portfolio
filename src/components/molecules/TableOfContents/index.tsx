import React, {useState} from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {P1} from '@components';

const Item = styled.a<{isActive: boolean}>`
  color: ${({isActive}) =>
    isActive ? 'var(--color-text-secondary)' : 'var(--color-text-tertiary)'};
  text-decoration: none;
  display: block;
  line-height: 1.6;

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

export interface TableOfContentsProps {
  headings: {
    value: string;
    depth: number;
  }[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({headings}) => {
  const [activeId, setActiveId] = useState(0);

  return (
    <>
      <Title>Table of Contents</Title>

      {headings.map(({value, depth}, index) => (
        <Item
          key={index}
          href={`#${value
            .replace(/[^\w\s]|_/g, '')
            .replace(/\s+/g, ' ')
            .split(' ')
            .join('-')
            .toLowerCase()}`}
          isActive={activeId === index}
          onClick={() => setActiveId(index)}
          style={{marginLeft: depth < 3 ? 0 : depth * 8}}
        >
          {value.length > 24 ? value.substring(0, 25) + '...' : value}
        </Item>
      ))}
    </>
  );
};

export default TableOfContents;
