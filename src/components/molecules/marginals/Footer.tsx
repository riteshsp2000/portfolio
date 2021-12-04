import React from 'react';

// Libraries
import styled from 'styled-components';
import {Link} from 'gatsby';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

// Components
import Container from '../../atoms/layout/Container';
import {H3, P2, P1} from '@components';

// Assets
import {navItems} from './Navbar';

const PrimeContainer = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;

  background: var(--color-background-secondary);
  transition: var(--transition);

  position: static;
  bottom: 0;
  left: 0;
`;

const NewP1 = styled(P1)`
  color: var(--color-text-tertiary);
`;
const NewP2 = styled(P2)`
  color: var(--color-text-tertiary);
`;
const NewH3 = styled(H3)`
  color: var(--color-text-tertiary);
`;

const FlexibleContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  min-height: 240px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Row1Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Row2Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

  @media (max-width: 700px) {
    display: none;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const NewLink = styled(Link)`
  text-decoration: none;
`;

const NewA = styled.a`
  text-decoration: none;
  color: var(--color-text-tertiary);
`;

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/riteshsp2000',
    icon: faGithub,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/riteshsp2000',
    icon: faInstagram,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/riteshsp2000',
    icon: faTwitter,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/riteshsp2000',
    icon: faLinkedin,
  },
];

const Footer = () => (
  <PrimeContainer>
    <FlexibleContainer>
      <Row1Container>
        <NewH3>{"Let's connect and grab a coffee ☕"}</NewH3>

        <NewP2 style={{marginTop: '2rem'}}>
          Drop me a line for work inquiries or just say hello
        </NewP2>
        <NewA
          href="mailto:hello@riteshpatil.com"
          rel="noreferrer"
          target="_blank"
        >
          <NewP2>hello@riteshpatil.com</NewP2>
        </NewA>

        <NewP2 style={{marginTop: '2rem'}}>
          Developed with 💙 and a firey 🔥 macbook 💻 by Ritesh Patil
        </NewP2>
      </Row1Container>

      <Row2Container>
        <NavContainer>
          {navItems.slice(0, navItems.length - 1).map(({name, link, id}) => (
            <NewLink to={link} key={id}>
              <NewP2>{name}</NewP2>
            </NewLink>
          ))}
        </NavContainer>

        <SocialsContainer>
          {socials.map(({name, url, icon}) => (
            <NewA href={url} key={name} rel="noreferrer" target="_blank">
              <FontAwesomeIcon
                icon={icon}
                style={{fontSize: '1.5rem', marginLeft: '1rem'}}
              />
            </NewA>
          ))}
        </SocialsContainer>
      </Row2Container>
    </FlexibleContainer>
  </PrimeContainer>
);

export default Footer;
