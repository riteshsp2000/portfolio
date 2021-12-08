import styled from 'styled-components';

// Components
import {Flexbox, H3, P2} from '@components';
import {BREAKPOINTS} from '../../../theming';

export const Container = styled(Flexbox)`
  width: 100%;
  height: auto;

  padding: 2rem 0rem;
`;

export const ContentContainer = styled.div<{short: boolean}>`
  width: ${({short}) => (short ? '45%' : '55%')};

  @media ${BREAKPOINTS.md} {
    width: 100%;
  }
`;

export const Content = styled(P2)<{short: boolean; flip: boolean}>`
  margin-left: ${({short, flip}) => (short && !flip ? '1.5rem' : '0')};
  margin-right: ${({short, flip}) => (short && flip ? '1.5rem' : '0')};
  margin-bottom: 1rem;
  text-align: ${({flip}) => (flip ? 'right' : 'left')};
`;

export const ImageContainer = styled.div<{flip: boolean}>`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: ${({flip}) => (!flip ? 'flex-end' : 'flex-start')};

  .image {
    width: 90%;
    height: 100%;

    object-fit: cover;
    object-position: center;
    aspect-ratio: 3/2;
    border-radius: 6px;

    @media ${BREAKPOINTS.md} {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  @media ${BREAKPOINTS.md} {
    width: 100%;
  }
`;
