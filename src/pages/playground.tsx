import React from 'react';

// Components
import {H1, H2, H3, H4, P1, P2, P3, FancyText} from '../components';

const Playground: React.FC = () => (
  <div style={{background: 'var(--color-background-primary)'}}>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <P1>Paragraph 1</P1>
    <P2>Paragraph 2</P2>
    <P3>Paragraph 3</P3>

    <FancyText>Fancy Text</FancyText>
  </div>
);

export default Playground;
