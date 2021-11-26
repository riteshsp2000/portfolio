import React from 'react';

import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  color: var(--color-primary);
  /* font-style: italic; */
`;

const RedirectLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> =
  props => <Link {...props} target="_blank" rel="noreferrer" />;

export default RedirectLink;
