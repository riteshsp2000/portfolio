import React from 'react';

// Libraries
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Constants
import {BREAKPOINTS} from '../../theming';
import config from '../../config';

export function Links(): JSX.Element {
  return (
    <LinksContainer>
      {config.socialMedia.map(({url, icon}) => (
        <IconContainer key={url}>
          <a href={url} target="_blank" rel="noreferrer">
            <Icon size="lg" icon={icon} />
          </a>
        </IconContainer>
      ))}
      <VerticalLine />
    </LinksContainer>
  );
}

export function Email(): JSX.Element {
  return (
    <EmailContainer>
      <a
        href={`mailto:${config.email}`}
        target="_blank"
        rel="noreferrer"
        style={{textDecoration: 'none'}}
      >
        <EmailText>{config.email}</EmailText>
      </a>
      <HorizontalLine />
    </EmailContainer>
  );
}

const LinksContainer = styled.div`
  width: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  transform: translate(-50%, 0%);
  bottom: 0;
  left: 50px;

  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

const IconContainer = styled.a`
  margin: 7px;
  padding: 7px;
  text-decoration: none;
`;

const Icon = styled(FontAwesomeIcon)`
  color: var(--color-secondary-heading);
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 100px;
  background-color: var(--color-secondary-heading);
  margin-top: 20px;
`;

const EmailContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 50px;
  transform: translate(50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: auto;

  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

const HorizontalLine = styled.div`
  width: 1px;
  height: 100px;
  background-color: var(--color-secondary-heading);
`;

const EmailText = styled.h3`
  color: var(--color-secondary-heading);
  font-size: 16px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-light);
  transform: rotate(90deg);
  margin-bottom: 110px;
`;
