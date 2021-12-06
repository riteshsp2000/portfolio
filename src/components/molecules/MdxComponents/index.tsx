import React from 'react';

// Libraries
import {MDXProvider} from '@mdx-js/react';

// Components
import {
  H1,
  H2,
  H3,
  P1,
  P2,
  CoverImage,
  Quote,
  Ul,
  Ol,
  Li,
  InlineCode,
  Code,
  BlogLink,
} from '@components';

// @ts-ignore
const Para = prps => {
  if (
    typeof prps.children === 'object' &&
    prps.children.props?.mdxType === 'img'
  ) {
    return <div {...prps} />;
  }

  return <P2 {...prps} style={{marginBottom: '2rem'}} />;
};

const MdxWrapper: React.FC = ({children}) => {
  return (
    <MDXProvider
      components={{
        wrapper: props => <div {...props} />,
        h1: props => <H1 {...props} style={{marginBottom: '1rem'}} />,
        h2: props => <H2 {...props} style={{marginBottom: '1rem'}} />,
        h3: props => <H3 {...props} style={{marginBottom: '1rem'}} />,
        h4: props => <P1 {...props} style={{marginBottom: '1rem'}} />,
        p: props => <Para {...props} />,
        blockquote: props => <Quote {...props} />,
        ul: props => <Ul {...props} style={{marginBottom: '2rem'}} />,
        ol: props => <Ol {...props} style={{marginBottom: '2rem'}} />,
        li: props => <Li {...props} />,
        a: props => <BlogLink {...props} />,
        img: props => <CoverImage {...props} />,
        inlineCode: props => <InlineCode {...props} />,
        code: props => <Code {...props} />,
      }}
    >
      {children}
    </MDXProvider>
  );
};

export default MdxWrapper;
