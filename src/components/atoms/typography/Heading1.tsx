// Libraries
import styled from 'styled-components';
import {BREAKPOINTS} from '../../../theming';

export default styled.h1`
  color: var(--color-text-primary);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  font-style: normal;
  letter-spacing: normal;
  font-size: 3rem;
  line-height: 1.6;
  transition: var(--transition);

  @media ${BREAKPOINTS.sm} {
    font-size: 2.2rem;
  }
`;
