import styled from 'styled-components';

// Components
import {Card} from '@components';

export const Container = styled(Card)`
  width: 100%;
  height: 100%;
  max-height: 400px;
  overflow: hidden;

  transition: var(--transition);
  transform: scale(1) translateY(0);

  &:hover {
    transform: scale(1.02) translateY(-6px);
  }

  padding: 1.5rem;
  border-radius: 12px;
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TechContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
