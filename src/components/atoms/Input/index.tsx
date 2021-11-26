import React from 'react';

// Libraries
import styled from 'styled-components';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

// Components
import {P2} from '@components';
import Flexbox from '../Flexbox';

const Container = styled.div`
  display: inline-block;
  min-width: 200px;
  width: auto;
  height: auto;
  min-height: 100px;
  overflow: hidden;
`;

const InputContainer = styled(Flexbox)`
  display: inline-flex;
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-text-primary);
  border-radius: 100px;

  padding: 0px 5px;
`;

const RawInput = styled.input`
  border: none;
  background: transparent;
  box-shadow: none;

  margin: 0;
  padding: 10px 20px;

  color: var(--color-text-primary);
  font-weight: var(--font-weight-regular);
  font-family: var(--font-family);
  font-style: normal;
  font-size: 1.125rem;
  line-height: 1.6;
  transition: var(--transition);
  vertical-align: middle;

  &:focus {
    outline: none;
  }
`;

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  showLabel?: boolean;
  label?: string;
  showError?: boolean;
  error?: string;
  icon?: IconProp;
  iconProps?: FontAwesomeIconProps;
}

const Input: React.FC<InputProps> = ({
  showLabel = false,
  label,
  showError = false,
  error,
  icon,
  iconProps,
  ...rest
}) => (
  <Container>
    {showLabel && <P2 style={{paddingBottom: '0.3rem'}}>{label}</P2>}

    <InputContainer
      justifyAround={icon ? true : false}
      justifyStart={icon ? false : true}
      alignCenter
    >
      {/* @ts-ignore */}
      <RawInput {...rest} />

      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size="1x"
          style={{marginRight: '20px'}}
          {...iconProps}
        />
      )}
    </InputContainer>

    {showError && <P2>{error}</P2>}
  </Container>
);

export default Input;
