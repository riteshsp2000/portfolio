import React, {useEffect} from 'react';

// Libraries
import styled, {keyframes} from 'styled-components';
// import {animated} from 'react-spring';

// Constants
import {BREAKPOINTS} from '../../theming';

const lineAnim = keyframes`
  to {
     stroke-dashoffset: 0;
  }
`;

const fill = keyframes`
  from {
    scale: 0;
  }

  to {
    scale: 1;
  }
`;

// @ts-ignore
const Container = styled.div<{style: any}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10002;

  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
`;

const StyledVector = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 50%;
  height: auto;

  @media ${BREAKPOINTS.md} {
    width: 85%;
    height: auto;
  }

  & path:nth-child(1) {
    stroke-dasharray: 801px;
    stroke-dashoffset: 801px;
    animation: ${lineAnim} 4s ease forwards;
    stroke: var(--color-text);
    /* animation: ${fill} 0.5s ease forwards 3s; */
  }
  & path:nth-child(2) {
    /* stroke-dasharray: 269px;
    stroke-dashoffset: 269px;
    animation: ${lineAnim} 2s ease forwards 0.2s; */
    stroke: var(--color-text);
    fill: var(--color-text);
    scale: 0.5;
    animation: ${fill} 0.5s ease forwards 3s;
  }
`;

const svg = (
  <StyledVector
    id="vector"
    width="720"
    height="150"
    viewBox="0 0 720 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2083 34.5207L65 4.04145L117.792 34.5207V95.4793L65 125.959L12.2083 95.4793V34.5207Z"
      // stroke="#FF0A78"
      strokeWidth="7"
    />
    <path
      d="M65.4688 70.4789H58V87.1351H48.625V41.6351H65.5313C70.9063 41.6351 75.0521 42.833 77.9688 45.2289C80.8855 47.6247 82.3438 51.0101 82.3438 55.3851C82.3438 58.4893 81.6667 61.083 80.3125 63.1664C78.9792 65.2289 76.948 66.8747 74.2188 68.1039L84.0625 86.6976V87.1351H74L65.4688 70.4789ZM58 62.8851H65.5625C67.9167 62.8851 69.7396 62.2914 71.0313 61.1039C72.323 59.8955 72.9688 58.2393 72.9688 56.1351C72.9688 53.9893 72.3542 52.3018 71.125 51.0726C69.9167 49.8435 68.0521 49.2289 65.5313 49.2289H58V62.8851Z"
      // fill="#FF0A78"
    />
  </StyledVector>
);

const Loader: React.FC<{setLoading?: (param: boolean) => void}> = ({
  setLoading,
}) => {
  useEffect(() => {
    if (setLoading) {
      setTimeout(() => setLoading(false), 3500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // @ts-ignore
  return <Container>{svg}</Container>;
};

export default Loader;
