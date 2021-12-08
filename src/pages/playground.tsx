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
  ProjectGrid,
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

    <ProjectGrid
      projects={[1, 2, 3, 4, 5].map(() => ({
        title: 'Boutiques',
        excerpt:
          'Designed and Developed a higly interactive application using React-Native Firebase with cross-platform support (iOS Android).',
        tech: ['react', 'typescript', 'firebase', 'agora', 'razorpay'],
        github: 'hello',
        live: 'live',
      }))}
    />

    <Banner
      alt="Ritesh Patil"
      src="https://res.cloudinary.com/riteshp2000/image/upload/v1638948441/portfolio/v2/assets/RiteshPatil_px7ns1.webp"
      content={[
        'Hey! I am Ritesh Patil, a Student Passionate about Computer Science. I enjoy creating web applications that live on the internet and can be accessed by everyone. I have been developing software for the past 2 years and it has been awesome so far!',
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences',
      ]}
    />

    <Banner
      title={'🚀 Ritesh Patil'}
      short
      alt="Ritesh Patil"
      src="https://res.cloudinary.com/riteshp2000/image/upload/v1638948441/portfolio/v2/assets/RiteshPatil_px7ns1.webp"
      content={[
        'Hey! I am Ritesh Patil, a Student Passionate about Computer Science. I enjoy creating web applications that live on the internet and can be accessed by everyone. I have been developing software for the past 2 years and it has been awesome so far!',
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences',
      ]}
    />

    <Banner
      title={'🚀 Ritesh Patil'}
      short
      flip
      alt="Ritesh Patil"
      src="https://res.cloudinary.com/riteshp2000/image/upload/v1638948441/portfolio/v2/assets/RiteshPatil_px7ns1.webp"
      content={[
        'Hey! I am Ritesh Patil, a Student Passionate about Computer Science. I enjoy creating web applications that live on the internet and can be accessed by everyone. I have been developing software for the past 2 years and it has been awesome so far!',
        'Fast Forward to today, I am a undergrad at National Institute of Technology Rourkela, India in the field of Industrial Design. My main focus these days is to write performant and industry standard code mainly using React and Node.js. I pay close attention to details, and have a great understanding of what it takes to build great user-centric experiences',
      ]}
    />
  </>
);

export default Playground;
