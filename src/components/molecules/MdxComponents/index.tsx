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
  Li,
  RedirectLink,
  InlineCode,
} from '@components';

const MdxWrapper: React.FC = ({children}) => {
  return (
    <MDXProvider
      components={{
        h1: H1,
        h2: H2,
        h3: H3,
        h4: P1,
        p: P2,
        blockquote: Quote,
        ul: Ul,
        li: Li,
        a: RedirectLink,
        img: CoverImage,
        inlineCode: InlineCode,
        /**
         * em - emphasis
         * strong: - bold
         * delete - strikethrough
         * inlineCode - obv
         * code - obv
         * ol
         */
      }}
    >
      {children}
    </MDXProvider>
  );
};

export default MdxWrapper;
