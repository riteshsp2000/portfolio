// Libraries
import styled from 'styled-components';

// Components
import {Card, H1 as Head1, P3 as Para1, P2} from '@components';
import Flexbox from '../../atoms/Flexbox';
import {BREAKPOINTS} from '@theme';

export const H1 = styled(Head1)`
  @media (max-width: 700px) {
    font-weight: var(--font-weight-bold);
    font-size: 1.5rem;
    font-style: normal;
  }
`;

export const P1 = styled(Para1)`
  @media (max-width: 700px) {
    font-weight: var(--font-weight-regular);
    font-style: normal;
    font-size: 1rem;
  }
`;

export const Tag = styled(P2)`
  margin-right: 1.5rem;
  padding: 10px 0px;
  font-weight: var(--font-weight-bold);

  &:hover {
    color: var(--color-primary);
    cursor: pointer;
  }
`;

export const GridContainer = styled(Card)`
  width: 80%;
  max-width: 900px;
  height: auto;
  overflow: hidden;
  padding: 4rem 4rem 5rem 0rem;

  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: auto auto;
  grid-gap: 1rem;

  @media ${BREAKPOINTS.md} {
    width: 100%;
    padding: 3rem 3rem 3rem 0rem;
  }

  @media ${BREAKPOINTS.sm} {
    width: 100%;
    grid-template-rows: auto 1fr auto;

    padding: 0.5rem 1rem;
  }
`;

export const Section1 = styled(Flexbox)`
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;

  picture {
    .project-image {
      width: 80%;
      height: auto;
      object-fit: contain;
      aspect-ratio: 0.525;
      max-width: 260px;
    }
  }

  @media ${BREAKPOINTS.sm} {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;

    picture {
      .project-image {
        width: 50%;
      }
    }
  }
`;

export const Section2 = styled(Flexbox)`
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;

  margin-left: 2rem;

  @media ${BREAKPOINTS.md} {
    margin-left: 1rem;
  }

  @media ${BREAKPOINTS.sm} {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;

    margin-left: 0rem;
  }
`;

export const Section3 = styled(Flexbox)`
  grid-column: 2 / span 1;
  grid-row: 3 / span 1;

  margin-left: 2rem;

  @media ${BREAKPOINTS.md} {
    margin-left: 1rem;
  }

  @media ${BREAKPOINTS.sm} {
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;

    margin-left: 0rem;
  }
`;

export const TechContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
