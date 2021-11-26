import styled from 'styled-components';

export default styled.button`
  background: var(--color-background-primary);
  border: 1px solid var(--color-text-primary);

  border-radius: 50px;
  width: auto;
  min-width: 100px;
  height: auto;

  margin: 0;
  padding: 5px 20px;

  color: var(--color-text-primary);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family);
  font-style: normal;
  font-size: 1.125rem;
  line-height: 1.6;
  transition: var(--transition);

  &:disabled {
    background: var(--color-background-secondary);
    border: 1px solid var(--color-background-secondary);
    color: var(--color-background-secondary);
  }

  &:hover,
  &:focus {
    background: var(--color-text-primary);
    color: var(--color-background-primary);
  }
`;
