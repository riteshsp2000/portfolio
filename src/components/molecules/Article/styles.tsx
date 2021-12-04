// Libraries
import styled from 'styled-components';

export const OuterContainer = styled.div`
  width: 100%;
  height: 22.5rem;

  position: relative;
  border-radius: 8px;
  overflow: hidden;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 100%;
`;

export const ImgContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 100%;

  .article-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Overlay = styled.div`
  width: 100%;
  padding: 0.7rem;
  padding-top: 1.4rem;
  transition: var(--transition);
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    var(--color-background-secondary-alpha)
  );

  .article-title {
    line-height: 1.2;
    font-size: 1.2rem;
  }

  div {
    p {
      color: var(--color-text-primary);
      opacity: 0.6;
    }
  }
`;
