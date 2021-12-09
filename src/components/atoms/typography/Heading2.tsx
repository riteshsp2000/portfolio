// Libraries
import styled from 'styled-components';
import {BREAKPOINTS} from '../../../theming';

export default styled.h2`
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  font-style: normal;
  font-size: 2rem;
  line-height: 1.6;
  transition: var(--transition);

  @media ${BREAKPOINTS.md} {
    font-size: 1.7rem;
    line-height: 1.4;
  }
`;
