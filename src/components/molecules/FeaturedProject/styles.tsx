// Libraries
import styled from 'styled-components';

// Components
import {Card, Image, H1 as Head1, P1 as Para1, P2} from '@components';

export const H1 = styled(Head1)`
  @media (max-width: 700px) {
    color: var(--color-text-primary);
    font-weight: var(--font-weight-bold);
    font-family: var(--font-family);
    font-style: normal;
    font-size: 1.5rem;
    line-height: 1.6;
    transition: var(--transition);
  }
`;

export const P1 = styled(Para1)`
  @media (max-width: 700px) {
    color: var(--color-text-primary);
    font-weight: var(--font-weight-regular);
    font-family: var(--font-family);
    font-style: normal;
    font-size: 1rem;
    line-height: 1.6;
    transition: var(--transition);
  }
`;

export const AlignerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(Card)`
  width: 80%;
  max-width: var(--max-width);
  overflow: hidden;

  padding: 2rem 4rem;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px repeat(3, 100px) 50px;
  grid-gap: 1rem;

  @media (max-width: 700px) {
    padding: 0.8rem;
    width: 100%;
    grid-template-rows: repeat(5, 100px) 50px;
  }
`;

export const Section1 = styled.div<{type: 'mobile' | 'web'}>`
  grid-column: 1 / span 1;
  grid-row: 1 / span 5;
  width: 100%;
  height: 100%;

  .project-image {
    aspect-ratio: 0.525;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 700px) {
    grid-column: 1 / span 3;
    grid-row: 4 / span 2;

    .project-image {
      width: 80%;
    }
  }
`;

export const Section2 = styled.div`
  grid-column: 2 / span 2;
  grid-row: 1 / span 3;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 700px) {
    grid-column: 1 / span 3;
    grid-row: 1 / span 3;
  }
`;

export const Section3 = styled.div`
  grid-column: 2 / span 2;
  grid-row: 4 / span 2;
  width: 100%;
  height: 100%;
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 700px) {
    padding-top: 0.5rem;
    grid-column: 1 / span 3;
    grid-row: 6 / span 2;
  }
`;

export const TechContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
