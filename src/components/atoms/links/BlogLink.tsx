import React from 'react';

// Librarires
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: var(--color-secondary);
`;

const BlogLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> =
  props => <Link {...props} target="_blank" rel="noreferrer" />;

export default BlogLink;
