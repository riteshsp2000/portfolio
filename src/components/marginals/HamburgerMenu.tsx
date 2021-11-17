import React, {MouseEventHandler} from 'react';

// Libraries
import styled from 'styled-components';

// Constants
import {BREAKPOINTS} from '../../theming';

const MenuContainer = styled.div`
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: none;
  transition: var(--transition);

  @media ${BREAKPOINTS.md} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Menu = styled.div<{open: boolean}>`
  width: 25px;
  height: 3px;
  border-radius: 5px;

  background: ${({open}) =>
    open ? 'transparent' : 'var(--color-text-primary)'};
  transform: ${({open}) => (open ? 'translateX(-50px)' : '')};
  transition: var(--transition);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background: var(--color-text-primary);
    border-radius: 5px;
    transition: var(--transition);
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

interface Props {
  open: boolean;
  onClick: MouseEventHandler<HTMLElement>;
}

const HamburgerMenu: React.FC<Props> = ({onClick, open}) => (
  <MenuContainer tabIndex={0} onClick={onClick}>
    <Menu open={open} />
  </MenuContainer>
);

export default HamburgerMenu;
