import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {Navbar} from '../marginals';
import {Vector} from '../shared';
import Svg from '../shared/Svg';

// Constants
import {BREAKPOINTS} from '../../theming';

// ======================= First Row ======================= //
interface Props {
  showVector?: boolean;
}

const RegularFirstRow: React.FC<Props> = ({children, showVector = true}) => (
  <FirstRow>
    <Navbar />
    {children && <FirstRowContainer>{children}</FirstRowContainer>}

    {showVector && (
      <>
        {/* <ProfileImg
          src="https://res.cloudinary.com/riteshsp2000/image/upload/portfolio/Ritesh_copy-removebg-preview_newzpm.webp"
          alt="Ritesh Profile"
        /> */}

        <Svg />
        <StyledVector viewBox="0 0 719 40" fill="none">
          <path d="M205.5 1.48071C132.7 -0.514533 38.1667 10.8103 0 16.7222V40H719V1.48071C708.5 1.48071 670.5 -1.01335 624.5 5.36035C563.005 13.881 503 26.6984 392.5 19.2162C282 11.734 296.5 3.97477 205.5 1.48071Z" />
        </StyledVector>
      </>
    )}
  </FirstRow>
);

export default RegularFirstRow;

// ======================= Styles ======================= //
const StyledVector = styled(Vector)`
  width: 100%;
  height: auto;

  position: absolute;
  bottom: 0;
  left: 0;

  fill: var(--color-background);
  transition: fill 350ms ease 0s;
`;

const FirstRow = styled.section`
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

// const ProfileImg = styled.img`
//   width: 230px;
//   height: auto;
//   position: absolute;
//   bottom: 0;
//   right: 20%;
//   opacity: var(--color-profile-opacity);

//   @media ${BREAKPOINTS.md} {
//     display: none;
//   }
// `;
