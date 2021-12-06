import * as React from 'react';

// Hooks
import {useTheme} from '@theme';

const id = 'inject-comments';

type Props = {
  children?: React.ReactNode;
  withSeparator: boolean;
};

const Comments = ({children, withSeparator = true}: Props) => {
  const [colorMode] = useTheme();

  React.useEffect(() => {
    const script = document.createElement('script');
    const parent = document.getElementById(id);

    if (parent) {
      script.setAttribute('src', 'https://utteranc.es/client.js');
      script.setAttribute('repo', 'riteshsp2000/blog-comments');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute(
        'theme',
        colorMode === 'dark' ? 'github-dark' : 'github-light',
      );

      script.setAttribute('crossorigin', 'anonymous');
      script.setAttribute('async', 'true');
      parent.appendChild(script);

      return () => {
        while (parent.firstChild) {
          if (parent.lastChild) parent.removeChild(parent.lastChild);
        }
      };
    }
  }, [colorMode]);

  return (
    <>
      {withSeparator && <div />}
      {children && <div>{children}</div>}
      <div id={id} style={{minHeight: '270px'}} />
    </>
  );
};

export default Comments;
