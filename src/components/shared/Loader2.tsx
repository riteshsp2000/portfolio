import React, {useEffect} from 'react';

// Libraries
import styled, {keyframes} from 'styled-components';
// import {animated} from 'react-spring';

const lineAnim = keyframes`
  to {
     stroke-dashoffset: 0;
  }
`;

// @ts-ignore
const Container = styled.div<{mounted: boolean}>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 10002;

  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  opacity: ${({mounted}) => (mounted ? 1 : 0)};
  transition: opacity 200ms ease 0s;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
`;

const StyledVector = styled.svg<{mounted: boolean}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* width: 100px; */
  /* height: 100px; */
  width: ${({mounted}) => (mounted ? '100px' : '0px')};
  height: ${({mounted}) => (mounted ? '100px' : '0px')};
  transition: width 200ms ease 0s, height 200ms ease 0s;

  & path:nth-child(1) {
    stroke-dasharray: 536px;
    stroke-dashoffset: 536px;
    stroke-linecap: round;
    animation: ${lineAnim} 2s ease forwards;
    stroke: var(--color-text);
  }
  & path:nth-child(2) {
    stroke: var(--color-text);
    fill: var(--color-text);
  }
`;

const svg = (mounted: boolean) => (
  <StyledVector
    id="vector"
    width="190"
    height="190"
    viewBox="0 0 190 190"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    mounted={mounted}
  >
    <path
      d="M17.7276 50.3868L95 5.7735L172.272 50.3868V139.613L95 184.227L17.7276 139.613V50.3868Z"
      stroke="#FF0A78"
      strokeWidth="10"
    />
    <path
      d="M95.7031 102.367H84.5V127.351H70.4375V59.1013H95.7969C103.859 59.1013 110.078 60.8982 114.453 64.4919C118.828 68.0857 121.016 73.1638 121.016 79.7263C121.016 84.3826 120 88.2732 117.969 91.3982C115.969 94.4919 112.922 96.9607 108.828 98.8044L123.594 126.695V127.351H108.5L95.7031 102.367ZM84.5 90.9763H95.8437C99.375 90.9763 102.109 90.0857 104.047 88.3044C105.984 86.4919 106.953 84.0076 106.953 80.8513C106.953 77.6326 106.031 75.1013 104.187 73.2576C102.375 71.4138 99.5781 70.4919 95.7969 70.4919H84.5V90.9763Z"
      fill="#FF0A78"
    />
  </StyledVector>
);

const Loader: React.FC<{setLoading?: (param: boolean) => void}> = ({
  setLoading,
}) => {
  const [mounted, setMounted] = React.useState(true);
  useEffect(() => {
    if (setLoading) {
      setTimeout(() => {
        setMounted(false);
        setTimeout(() => setLoading(false), 200);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // @ts-ignore
  return <Container mounted={mounted}>{svg(mounted)}</Container>;
};

export default Loader;
