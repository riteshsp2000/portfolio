import React from 'react';

// Libraries
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// Components
import {Links, Email} from '../shared';

// Constants
import {BREAKPOINTS} from '../../theming';
import config from '../../config';

// ======================= Second Row ======================= //
interface Props {
  isLoading?: boolean;
}

const RegularRowTwo: React.FC<Props> = ({isLoading, children}) => (
  <>
    <Links />
    <SecondRow>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {isLoading});
        }
        return child;
      })}

      <Footer id="contact">
        {config.socialMedia.map(({url, icon}) => (
          <IconContainer key={url} href={url} target="_blank" rel="noreferrer">
            <Icon size="lg" icon={icon} />
          </IconContainer>
        ))}
      </Footer>
      <EmailText
        href={`mailto:${config.email}`}
        target="_blank"
        rel="noreferrer"
      >
        {config.email}
      </EmailText>
    </SecondRow>
    <Email />
  </>
);

export default RegularRowTwo;

// ======================= Styles ======================= //

const SecondRow = styled.div`
  width: 85%;
  height: 100%;
  max-width: 1100px;
  min-height: calc(100vh - 400px);

  padding: 0px 32px;
  margin-left: auto;
  margin-right: auto;

  @media ${BREAKPOINTS.sm} {
    width: 100%;
    padding: 0px 16px;
    min-height: calc(100vh - 200px);
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 80px;
  display: none;

  @media ${BREAKPOINTS.md} {
    display: flex;
    align-items: center;
    justify-content: center;
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

const EmailText = styled.a`
  color: var(--color-secondary-heading);
  font-size: 16px;
  font-family: var(--font-family);
  font-weight: var(--font-weight-light);
  line-height: 1;
  text-decoration: none;
  text-align: center;

  width: 100%;
  margin-bottom: 20px;
  display: none;

  @media ${BREAKPOINTS.md} {
    display: inline-block;
  }
`;
