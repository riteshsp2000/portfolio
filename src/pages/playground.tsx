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
  FeaturedProject,
  ProjectGrid,
  Input,
  Button,
  Tag,
  ArticleStack,
  FeaturedArticle,
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

    <FeaturedProject
      img="https://res.cloudinary.com/riteshp2000/image/upload/v1638024276/portfolio/v2/Rectangle_39_gtk3ab.webp"
      title="Boutiqes"
      excerpt="Designed and Developed a higly interactive application using React-Native Firebase with cross-platform support (iOS Android). Integrated features such as Livestreams, Audio/VideoCalls, Realtime chats, Payments, Social media features, etc."
      tech={['react', 'typescript', 'firebase', 'agora', 'razorpay']}
      github="hello"
      live="live"
      type="mobile"
    />
    <FeaturedProject
      img="https://res.cloudinary.com/riteshp2000/image/upload/v1638024273/portfolio/v2/Rectangle_2_l8k9cz.webp"
      title="Boutiqes"
      excerpt="Designed and Developed a higly interactive application using React-Native Firebase with cross-platform support (iOS Android). Integrated features such as Livestreams, Audio/VideoCalls, Realtime chats, Payments, Social media features, etc."
      tech={['react', 'typescript', 'firebase', 'agora', 'razorpay']}
      github="hello"
      live="live"
      type="web"
      flip={true}
    />

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

    <div style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <ArticleStack />
    </div>

    <div style={{marginTop: '2rem', marginBottom: '2rem'}}>
      <FeaturedArticle />
    </div>
  </>
);

export default Playground;
