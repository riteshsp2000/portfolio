import React from 'react';

// Libraries
import styled from 'styled-components';

// Constants
import {BREAKPOINTS} from '../../theming';

interface Props {
  open: boolean;
  onClick: any;
}

interface StyledProps {
  open: boolean;
}

function HamburgerMenu({open, onClick}: Props): JSX.Element {
  return (
    <MenuContainer onClick={onClick}>
      <Menu open={open} />
    </MenuContainer>
  );
}

export default HamburgerMenu;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 10001;
  display: none;

  @media ${BREAKPOINTS.md} {
    display: inline;
  }
`;

const Menu = styled.div<StyledProps>`
  width: 25px;
  height: 3px;
  border-radius: 5px;
  background: ${({open}) => (open ? 'transparent' : 'var(--color-text)')};
  transform: ${({open}) => (open ? 'translateX(-50px)' : '')};
  transition: all 0.5s ease-in-out;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background: var(--color-text);
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: ${({open}) =>
      open ? 'rotate(45deg) translate(35px, -35px)' : 'translateY(-8px)'};
  }

  &::after {
    transform: ${({open}) =>
      open ? 'rotate(-45deg) translate(35px, 35px)' : 'translateY(8px)'};
  }
`;
