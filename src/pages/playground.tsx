/* eslint-disable max-len */
import React from 'react';

// Styles
import {faSearch} from '@fortawesome/free-solid-svg-icons';

// Components
import {
  H1,
  H2,
  H3,
  H4,
  P1,
  P2,
  P3,
  FancyText,
  SectionTitle,
  WorkExperience,
  Input,
  Button,
  Tag,
  Banner,
} from '@components';

const Playground: React.FC = () => (
  <>
    <SectionTitle title="Work" highlight="Experience" />
    <WorkExperience />

    <SectionTitle title="Selected" highlight="Projects" />
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <P1>Paragraph 1</P1>
    <P2>Paragraph 2</P2>
    <P3>Paragraph 3</P3>

    <div>
      <Tag>React</Tag>
      <Tag>Typescript</Tag>
      <Tag>Node</Tag>
    </div>

    <FancyText>Fancy Text</FancyText>

    <div>
      <Input showLabel label="Enter query" icon={faSearch} />
    </div>

    <Button isBgPrimary={true}>Click me</Button>
  </>
);

export default Playground;
