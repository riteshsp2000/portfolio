import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: disc outside none;
  padding: 0rem 1.2rem;

  p {
    margin-bottom: 10px !important;
    display: inline;
  }
`;

export const Ol = styled.ol`
  list-style: decimal outside none;
  padding: 0rem 1.2rem;

  p {
    margin-bottom: 10px !important;
    display: inline;
  }
`;

export const Li = styled.li`
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family);
  font-style: normal;
  font-size: 1rem;
  line-height: 1.6;
  transition: var(--transition);
  display: list-item;
`;
