import styled from 'styled-components';

// Components
import {P2} from '@components';

export default styled(P2)`
  margin: 0;
  padding: 5px 20px;

  display: inline-block;
  width: auto;
  background: var(--color-background-secondary);
  text-align: center;
  border-radius: 50px;

  &:hover {
    background: var(--color-primary);
    cursor: pointer;
  }
`;
