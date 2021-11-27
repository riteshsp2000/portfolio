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

  @media ${BREAKPOINTS.sm} {
    padding: 0px 0px;
    margin-right: 1rem;
  }
`;

export const GridContainer = styled(Card)<{flip: boolean}>`
  width: 80%;
  max-width: 900px;
  height: auto;
  overflow: hidden;
  padding: 4rem 4rem 5rem 0rem;
  padding: ${({flip}) =>
    flip ? '4rem 0rem 4rem 4rem' : '4rem 4rem 4rem 0rem'};

  display: grid;
  grid-template-columns: ${({flip}) => (flip ? '2fr 1.5fr' : '1.5fr 2fr')};
  grid-template-rows: auto auto;
  grid-gap: 1rem;

  @media ${BREAKPOINTS.md} {
    width: 100%;
    padding: ${({flip}) =>
      flip ? '3rem 0rem 3rem 3rem' : '3rem 3rem 3rem 0rem'};
  }

  @media ${BREAKPOINTS.sm} {
    width: 100%;
    grid-template-rows: auto 1fr auto;

    padding: 0.5rem 1rem;
  }
`;

export const Section1 = styled(Flexbox)<{
  flip: boolean;
  type: 'mobile' | 'web';
}>`
  grid-column: ${({flip}) => (flip ? '2 / span 1' : '1 / span 1')};
  grid-row: 1 / span 3;

  picture {
    .project-image {
      width: ${({type}) => (type === 'web' ? '160%' : '80%')};
      height: auto;
      object-fit: contain;
      aspect-ratio: ${({type}) => (type === 'web' ? '1.65' : '0.525')} 0.525;
      max-width: ${({type}) => (type === 'web' ? '700px' : '260px')};
    }
  }

  @media ${BREAKPOINTS.sm} {
    grid-column: 1 / span 2;
    grid-row: 2 / span 1;

    picture {
      .project-image {
        width: ${({type}) => (type === 'web' ? '100%' : '50%')};
      }
    }
  }
`;

export const Section2 = styled(Flexbox)<{flip: boolean; isMobile: boolean}>`
  grid-column: ${({flip}) => (flip ? '1 / span 1' : '2 / span 1')};
  grid-row: 1 / span 2;

  ${({flip, isMobile}) =>
    !isMobile && flip ? 'margin-right: 2rem;' : 'margin-left: 2rem;'}

  @media ${BREAKPOINTS.md} {
    margin-left: 1rem;
  }

  @media ${BREAKPOINTS.sm} {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;

    margin-left: 0rem;
  }
`;

export const Section3 = styled(Flexbox)<{flip: boolean; isMobile: boolean}>`
  grid-column: ${({flip}) => (flip ? '1 / span 1' : '2 / span 1')};
  grid-row: 3 / span 1;

  ${({flip, isMobile}) =>
    !isMobile && flip ? 'margin-right: 2rem;' : 'margin-left: 2rem;'}

  @media ${BREAKPOINTS.md} {
    margin-left: 1rem;
  }

  @media ${BREAKPOINTS.sm} {
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;

    margin-left: 0rem;
  }

  /* Child Styles */
  .buttons-container {
    margin-top: 3rem;

    @media ${BREAKPOINTS.sm} {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
    }
  }
`;

export const TechContainer = styled.div<{flip: boolean}>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  justify-content: ${({flip}) => (flip ? 'flex-end' : 'flex-start')};

  @media ${BREAKPOINTS.sm} {
    margin-top: 0.5rem;
  }
`;
