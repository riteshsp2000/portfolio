import React from 'react';

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
  Image,
} from '@components';

const Playground: React.FC = () => (
  <>
    <SectionTitle title="Selected" highlight="Projects" />
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <P1>Paragraph 1</P1>
    <P2>Paragraph 2</P2>
    <P3>Paragraph 3</P3>

    <FancyText>Fancy Text</FancyText>

    <Image
      src="https://res.cloudinary.com/riteshp2000/image/upload/v1637558612/portfolio/v2/project-1.png"
      alt="Iphone image"
    />

    <SectionTitle title="Work" highlight="Experience" />
    <WorkExperience />
  </>
);

export default Playground;
