import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: var(--font-family-mono) !important;
  padding: 0rem 1.5rem;
  background: var(--color-background-secondary);
  transition: var(--transition-bg);

  border-radius: 6px;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 0;
  padding: 0;
  overflow: scroll;
  background: var(--color-background-secondary) !important;
  transition: var(--transition-bg);

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    font-family: var(--font-family-mono) !important;
    letter-spacing: 0.3px;
  }

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;
