// Libraries
import styled from 'styled-components';

// Utils
import {BREAKPOINTS} from '@theme';

export default styled.div`
  width: 100%;
  max-width: var(--max-width);
  height: auto;

  margin: 0px auto;
  padding: 1rem;

  @media ${BREAKPOINTS.md} {
    width: 90%;
  }

  @media ${BREAKPOINTS.sm} {
    width: 95%;
    padding: 0.5rem;
  }
`;
