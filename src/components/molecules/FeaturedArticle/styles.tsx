import styled from 'styled-components';

// Components
import {Flexbox, H1} from '@components';

// Assets
import {BREAKPOINTS} from '@theme';

export const Title = styled(H1)`
  @media (max-width: 1050px) {
    font-size: 2.5rem;
  }

  @media ${BREAKPOINTS.md} {
    font-size: 2rem;
  }

  @media ${BREAKPOINTS.sm} {
    font-size: 1.5rem;
    margin-top: 1rem;
  }
`;

export const CardContainer = styled(Flexbox)`
  width: 100%;
  height: 500px;

  padding: 3rem 4rem;
  background: var(--color-background-secondary);
  transition: var(--transition);
  border-radius: 14px;

  @media ${BREAKPOINTS.md} {
    padding: 2rem 1.5rem;
  }

  @media ${BREAKPOINTS.sm} {
    padding: 1rem 0.5rem;
    padding-top: 0.5rem;
  }

  .column1 {
    height: 100% !important;
    width: 45%;

    @media ${BREAKPOINTS.sm} {
      width: 100%;
    }

    div {
      .article-context {
        margin-top: 1rem;

        @media ${BREAKPOINTS.sm} {
          margin-top: 0.5rem;
          line-height: 1.4;
        }
      }
    }

    button {
      @media ${BREAKPOINTS.sm} {
        font-size: 1rem;
      }
    }
  }
`;

export const ImgContainer = styled.div`
  width: 45%;
  height: 100%;

  border-radius: 8px;
  overflow: hidden;
  background-color: var(--color-background-primary);

  @media ${BREAKPOINTS.sm} {
    width: 100%;
  }

  .featured-article-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
