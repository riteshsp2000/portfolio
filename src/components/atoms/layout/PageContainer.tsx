// Libraries
import styled from 'styled-components';

export default styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;

  margin: 0;
  padding: 0;
  padding-top: 80px;

  overflow-x: hidden;
  overflow-y: auto;

  transition: var(--transition);
  /* background: var(--color-background-primary); */
  color: var(--color-text-primary);

  position: relative;
  z-index: 1;
`;
