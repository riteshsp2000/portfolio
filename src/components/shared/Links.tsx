import React from 'react';

// Libraries
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Constants
import {BREAKPOINTS} from '../../theming';
import config from '../../config';

export const Links: React.FC = () => (
  <LinksContainer>
    {config.socialMedia.map(({url, icon}) => (
      <IconContainer key={url} href={url} target="_blank" rel="noreferrer">
        <Icon size="lg" icon={icon} />
      </IconContainer>
    ))}
    <VerticalLine />
  </LinksContainer>
);

export const Email: React.FC = () => (
  <EmailContainer>
    <EmailText href={`mailto:${config.email}`} target="_blank" rel="noreferrer">
      {config.email}
    </EmailText>
    <HorizontalLine />
  </EmailContainer>
);

// ================== Links Styles ================== //
const LinksContainer = styled.aside`
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

// ================== Emails Styles ================== //
const EmailContainer = styled.aside`
  position: fixed;
  bottom: 0;
  right: 50px;
  transform: translate(50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 50px;
  height: 330px;

  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

const HorizontalLine = styled.div`
  width: 1px;
  height: 100px;
  background-color: var(--color-secondary-heading);
`;

const EmailText = styled.a`
  color: var(--color-secondary-heading);
  font-size: 16px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-light);
  transform: rotate(90deg);
  width: 202px;
  line-height: 1;
  margin-bottom: 110px;
  text-decoration: none;
`;
