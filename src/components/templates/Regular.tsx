/* eslint-disable react/require-default-props */
import React, {useState, useEffect} from 'react';

// Libraries
import styled from 'styled-components';
import {PageRendererProps} from 'gatsby';

// Components
import {Header} from '../marginals';
import {Vector, Links, Email} from '../shared';

// Constants
import {BREAKPOINTS} from '../../theming';

// ======================= First Row ======================= //
export function LayoutFirstRow({
  children,
  showVector = true,
}: {
  children?: React.ReactNode;
  // eslint-disable-next-line react/require-default-props
  showVector?: boolean;
}): JSX.Element {
  return (
    <FirstRow>
      <Header />
      {children && <FirstRowContainer>{children}</FirstRowContainer>}

      {showVector && (
        <>
          <ProfileImg
            src="https://res.cloudinary.com/riteshsp2000/image/upload/portfolio/Ritesh_copy-removebg-preview_newzpm.png"
            alt="Ritesh Profile"
          />
          <StyledVector viewBox="0 0 719 40" fill="none">
            <path d="M205.5 1.48071C132.7 -0.514533 38.1667 10.8103 0 16.7222V40H719V1.48071C708.5 1.48071 670.5 -1.01335 624.5 5.36035C563.005 13.881 503 26.6984 392.5 19.2162C282 11.734 296.5 3.97477 205.5 1.48071Z" />
          </StyledVector>
        </>
      )}
    </FirstRow>
  );
}

// ======================= Second Row ======================= //
export function LayoutSecondRow({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
}): JSX.Element {
  return (
    <>
      <Links />
      <SecondRow>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {isLoading});
          }
          return child;
        })}
      </SecondRow>
      <Email />
    </>
  );
}

// ======================= Container ======================= //
export const RegularTemplate: React.FC<PageRendererProps> = ({
  children,
  location,
}) => {
  const isHome = location?.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
          setIsLoading(false);
        }
      }, 0);
    }
  }, [isLoading, location.hash]);

  return (
    <Container>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {isLoading});
        }
        return child;
      })}
    </Container>
  );
};

// ======================= Styles ======================= //
const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background: var(--color-background);
  transition: color 350ms ease 0s, background 350ms ease 0s;
`;

const StyledVector = styled(Vector)`
  width: 100%;
  height: auto;

  position: absolute;
  bottom: 0;
  left: 0;

  fill: var(--color-background);
  transition: fill 350ms ease 0s;
`;

const FirstRow = styled.div`
  width: 100%;
  height: 400px;

  margin: 0px;
  padding: 50px 0px;

  position: relative;
  background: linear-gradient(
    0deg,
    var(--color-gradient-background-one),
    var(--color-gradient-background-two)
  );
  transition: var(--color-gradient-background-one) 350ms linear 0s,
    var(--color-gradient-background-two) 350ms linear 0s;

  @media ${BREAKPOINTS.md} {
    height: 200px;
    padding: 30px 0px;
  }
`;

const FirstRowContainer = styled.div`
  width: 100%;
  max-width: 1100px;

  padding-left: 32px;
  padding-right: 32px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;

const SecondRow = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  min-height: calc(100vh - 400px);
  padding: 50px 32px;
  margin-left: auto;
  margin-right: auto;

  @media ${BREAKPOINTS.sm} {
    padding: 50px 16px;
    min-height: calc(100vh - 200px);
  }
`;

const ProfileImg = styled.img`
  width: 230px;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 20%;
  opacity: var(--color-profile-opacity);
  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;
