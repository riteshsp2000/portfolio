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

const HamburgerMenu: React.FC<Props> = ({onClick, open}) => (
  <MenuContainer tabIndex={0} onClick={onClick}>
    <Menu open={open} />
  </MenuContainer>
);

export default HamburgerMenu;

const MenuContainer = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;

  z-index: 10001;

  display: none;
  transition: display 500ms ease-in-out 0s;

  @media ${BREAKPOINTS.md} {
    display: flex;
    justify-content: center;
    align-items: center;
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
